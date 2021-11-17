import { createContext, useContext, useEffect, useState } from "react";
import { api } from './../../service/api.js'

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
    const [receive, setReceive] = useState([]);
    const [spend, setSpend] = useState([]);
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkBtYWlsLmNvbSIsImlhdCI6MTYzNzA5OTI4NywiZXhwIjoxNjM3MTAyODg3LCJzdWIiOiI0In0.Pr4DcjFrjyJxgVMw5sNWydXBc9M_dfKPnEBzf6URTwM"
    // const id = 4

    const token = localStorage.getItem("@tokenfinan") || ""

    const id = Number(localStorage.getItem("idfinan")) || ""

    const getAllReceive = () => {

        console.log("dados provider Dash", token, id)
        api
            .get(`/receive/?userId=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((res) => {
                res.data.length !== 0 && setReceive(res.data)
            })
            .catch(err => console.log(err.message))
    }

    const getAllSpend = () => {
        api
            .get(`/spend/?userId=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((res) => {
                res.data.length !== 0 && setSpend(res.data)
            })
            .catch(err => console.log(err.message))
    }

    const newReceive = receive.filter(item => item.type === false)
    const newSpend = spend.filter(item => item.type === false)

    const newReceived = receive.filter(item => item.type === true)
    const newSpended = spend.filter(item => item.type === true)

    const spendTotal = newSpended.reduce((acc, bill) => acc + bill.value, 0)
    const receiveTotal = newReceived.reduce((acc, bill) => acc + bill.value, 0)
    const arraySpend = newSpend.map(item => item.value)
    const arrayNameSpend = newSpend.map(item => item.category)

    useEffect(() => {
        getAllReceive()
        getAllSpend()
        // eslint-disable-next-line
    }, [])

    return (
        <DashboardContext.Provider value={{ newReceive, newSpend, spendTotal, receiveTotal, arraySpend, arrayNameSpend }}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useListDashboard = () => useContext(DashboardContext);
