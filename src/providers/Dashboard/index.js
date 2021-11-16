import { createContext, useContext, useEffect, useState } from "react";
import { api } from './../../service/api.js'

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
    const [receive, setReceive] = useState([]);
    const [spend, setSpend] = useState([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZUBtYWlsLmNvbSIsImlhdCI6MTYzNzA2NjI0MSwiZXhwIjoxNjM3MDY5ODQxLCJzdWIiOiIzIn0.sgGwMUp65lycdkAWUm2FJN8tFBJRchGISeK2EPRhoPU"
    const id = 3

    const getAllReceive = () => {
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

    const spendTotal = newSpend.reduce((acc, bill) => acc + bill.value, 0)
    const receiveTotal = newReceive.reduce((acc, bill) => acc + bill.value, 0)
    const arraySpend = newSpend.map(item => item.value)
    const arrayNameSpend = newSpend.map(item => item.account)

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
