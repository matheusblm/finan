import {useContext,createContext,useState,useEffect} from "react";
import {api} from "../../service/api";

const SpendContext = createContext()

export const SpendProvider = ({children}) => {

    const [spended,setSpended] = useState()

    const [noSpend,setNoSpend] = useState()

    const [allSpends,setAllSpends] = useState()

    const [filterPorMesSpend,setFilterPorMesSpend] = useState()

    const [filterPorMesSpendAtual,setFilterPorMesSpendAtual] = useState()

    const data = new Date()

    const mes = data.getMonth() + 1

    //Pegar todos os spend
    const Spends =(userId)=> {
        api.get(`spend?userId=${userId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(resp=>setAllSpends(resp))
        .catch(resp=>console.log(resp))
    }

    useEffect(()=>{
        Spends()
    },[])

    //Todos os pagos.
    const filterReceived = () => {

        const received = allSpends.filter((item)=>item.type === true)
        setSpended(received)
    }

    //Todos os não pagos.
    const filterNoReceived = () => {

        const received = allSpends.filter((item)=>item.type === false)
        setNoSpend(received)
    }

    //Filtro de receitas do mês atual

    const filterMesAtual = () => {
        const filterPorMesSpend = spended.filter((item)=>item.data.split("-"[1]===mes)
        )
        setFilterPorMesSpendAtual(filterPorMesSpend)
    }

    useEffect(()=>{
        filterMesAtual()
    },[])

    //Filtrar por mes escolhido pelo usuário
    const filterMonthReceived = (mes) => {
        const filterPorMesSpend = spended.filter((item)=>item.data.split("-"[1]===mes)
        )
        setFilterPorMesSpend(filterPorMesSpend)
    }


    //Transformar spends não pago em pagos
    const editSpend = (id) => {
        api.patch(`spend/${id}`,
        {
            "type": true
        },{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .catch(resp=>console.log(resp))
    }

    const lancSpend = (data) => {
        api.post(`spend`,data,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .catch(resp=>console.log(resp))
    }

    return (
        <SpendContext.Provider value={{}}>
            {children}
        </SpendContext.Provider>
    )
}

export const Spend = () => useContext(SpendContext)