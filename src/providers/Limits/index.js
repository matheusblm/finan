import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../../service/api";
import { Users } from "../Users";

export const LimitsContext = createContext();

export const LimitsProvider = ({ children }) => {
    const [totalSpends, setTotalSpends] = useState(0);

    const [userSpends, setUserSpends] = useState([]);

    const { limits } = Users();

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

    const getTotalValueLimit = () => {
        const valuesLimits = Object.values(limits)
        const newTotalLimit = valuesLimits.reduce((acc, limit) => {
            return acc + limit
        }, 0)

        setTotalLimit(Number(newTotalLimit));
    }

    const changeLimit = (data) => {

        localStorage.setItem("limits", JSON.stringify(data[0]))

        api.patch(`/users/${userId}`, { limits: data }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }


    useEffect(() => {
        getSpend()
        spendsReduce()
        getTotalValueLimit()
    }, [])

    return (
        <LimitsContext.Provider value={{ totalSpends, userSpends, limits, totalLimit, changeLimit, getTotalValueLimit }}>{children}</LimitsContext.Provider>
    );

};

export const useLimits = () => useContext(LimitsContext);