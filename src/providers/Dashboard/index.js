import { createContext, useEffect, useState } from "react";
import api from '../../services/api'

export const DashboardContext = createContext()

export const DashboardProvider = ({ children }) => {
    const [listReceive, setListReceive] = useState([])
    const [listSpend, setListSpend] = useState([])

    const { authToken } = '1234556'

    const getAllReceive = () => {
        api
            .get('/receive/', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then(res => setListReceive(res.data))
            .catch(console.log)
    }

    const getAllSpend = () => {
        api
            .get('/spend/', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then(res => setListSpend(res.data))
            .catch(console.log)
    }

    useEffect(() => {
        getAllReceive()
        getAllSpend()
    }, [])

    return (
        <DashboardContext.Provider value={{ listReceive, listSpend, getAllReceive, getAllSpend }}>
            {children}
        </DashboardContext.Provider>
    )
}