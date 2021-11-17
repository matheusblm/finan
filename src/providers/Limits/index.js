import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../../service/api";

export const LimitsContext = createContext();

export const LimitsProvider = ({ children }) => {
    const [totalSpends, setTotalSpends] = useState(0);

    const [userSpends, setUserSpends] = useState([]);

    const [limits, setLimits] = useState([]);

    const [totalLimit, setTotalLimit] = useState(0)

    const token = localStorage.getItem('@tokenfinan') || "";

    const userId = localStorage.getItem('idfinan') || "";

    const getSpend = () => {
        api
            .get(`/spend/?userId=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => {
                resp.data.length > 0 && setUserSpends(resp.data);
            })
            .catch((err) => console.log(err));
    }

    const spendsReduce = () => {
        const newSum = userSpends.reduce((acc, spend) => {
            return acc + spend.value
        }, 0)

        setTotalSpends(newSum)
    }

    const getLimits = () => {
        api
            .get(`/limit/?userId=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((resp) => {
                console.log("providerLimits", resp)
                setLimits(resp.data[0])
            })
            .catch((err) => console.log(err))
    }

    const getTotalValueLimit = () => {
        const filterLimits = limits.filter((limit) => {
            return limit !== "userId" || limit !== "id"
        })
        const valuesLimits = Object.values(filterLimits)

        const newTotalLimit = valuesLimits.reduce((acc, limit) => {
            return acc + limit
        }, 0)

        setTotalLimit(Number(newTotalLimit));
    }

    useEffect(() => {
        getSpend()
        spendsReduce()
        getLimits()
        getTotalValueLimit()
    }, [])

    return (
        <LimitsContext.Provider value={{ totalSpends, userSpends, limits, totalLimit }}>{children}</LimitsContext.Provider>
    );

};

export const useLimits = () => useContext(LimitsContext);