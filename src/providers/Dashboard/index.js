import { createContext, useContext, useEffect, useState } from "react";
import api from '../../service/api'

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
    const [receive, setReceive] = useState([]);
    const [spend, setSpend] = useState([]);
    const { token } = 'Users()'


    const getAllReceive = () => {
        api
            .get("/receive/", {
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
            .get("/spend/", {
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