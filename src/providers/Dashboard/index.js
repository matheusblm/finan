import { createContext, useContext, useEffect, useState } from "react";
import { api } from './../../service/api.js'

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
    const [receive, setReceive] = useState([]);
    const [spend, setSpend] = useState([]);
    const [openModalWallet, setOpenModalWallet] = useState(false)

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

    const newReceiveAll = receive.filter(item => item.type === false)
    const newSpendAll = spend.filter(item => item.type === false)

    const newReceivedAll = receive.filter(item => item.type === true)
    const newSpendedAll = spend.filter(item => item.type === true)

    const newReceive = receive.filter((item) => Number(item.data.split("-")[0]) === new Date().getFullYear() && item.type === false
    ).filter((item) => Number(item.data.split("-")[1]) === new Date().getMonth() + 1 && item.type === false
    );
    const newSpend = spend.filter((item) => Number(item.data.split("-")[0]) === new Date().getFullYear() && item.type === false
    ).filter((item) => Number(item.data.split("-")[1]) === new Date().getMonth() + 1 && item.type === false
    );
    const newReceived = receive.filter((item) => Number(item.data.split("-")[0]) === new Date().getFullYear() && item.type === true
    ).filter((item) => Number(item.data.split("-")[1]) === new Date().getMonth() + 1 && item.type === true
    );
    const newSpended = spend.filter((item) => Number(item.data.split("-")[0]) === new Date().getFullYear() && item.type === true
    ).filter((item) => Number(item.data.split("-")[1]) === new Date().getMonth() + 1 && item.type === true
    );

    const spendTotal = newSpend.reduce((acc, bill) => acc + bill.value, 0)
    const receiveTotal = newReceive.reduce((acc, bill) => acc + bill.value, 0)

    const spendedTotal = newSpended.reduce((acc, bill) => acc + bill.value, 0)
    const receivedTotal = newReceived.reduce((acc, bill) => acc + bill.value, 0)

    const agruparPor = (objetoArray, propriedade) => {
        return objetoArray.reduce(function (acc, obj) {
            let key = obj[propriedade];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    const arraySpend = agruparPor(newSpend, 'category')
    console.log(arraySpend)
    const arrayNameSpend = newSpend.map(item => (
        item.category
    ))

    const handleModalWallet = () => setOpenModalWallet(!openModalWallet)

    useEffect(() => {
        getAllReceive()
        getAllSpend()
        // eslint-disable-next-line
    }, [])

    return (
        <DashboardContext.Provider value={{
            newReceive, receivedTotal, spendedTotal, newSpend, spendTotal, receiveTotal, arraySpend, arrayNameSpend, getAllReceive, getAllSpend, openModalWallet, handleModalWallet
        }}>
            {children}
        </DashboardContext.Provider>
    )
}

export const useListDashboard = () => useContext(DashboardContext);
