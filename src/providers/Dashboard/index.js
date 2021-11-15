import { createContext, useContext, useEffect, useState } from "react";
import { api } from './../../service/api.js'

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
    const [receive, setReceive] = useState([]);
    const [spend, setSpend] = useState([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZUBtYWlsLmNvbSIsImlhdCI6MTYzNjk4ODAzNiwiZXhwIjoxNjM2OTkxNjM2LCJzdWIiOiIzIn0.oEYOSkWfVBJJADoyhJsZ5XwdFQX5IYJnrHJWmzow9CQ"
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

    useEffect(() => {
        getAllReceive()
        getAllSpend()
        // eslint-disable-next-line
    }, [])

    return (
        <DashboardContext.Provider value={{ receive, spend, getAllReceive, getAllSpend }}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useListDashboard = () => useContext(DashboardContext);