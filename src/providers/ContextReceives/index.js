import {useContext,createContext,useState,useEffect} from "react";
import {api} from "../../service/api";

const ReceivesContext = createContext();

export const ReceiveProvider = ({children})=> {

    const [received,setReceived] = useState()

    const [noReceived,setNoReceived] = useState()

    const [allReceives,setAllReceives] = useState()

    const [filterPorMesReceive,setFilterPorMesReceive] = useState()

    const [filterPorMesReceiveAtual,setFilterPorMesReceiveAtual] = useState()

    const data = new Date()

    const mes = data.getMonth() + 1

    //Pega todos os receber.
    const Receives = (userId) => {
        api.get(`receives?userId=${userId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(resp=>setAllReceives(resp))
        .catch(resp=>console.log(resp))
    }

    useEffect(()=>{
        Receives()
    },[])


    // Todos os recebidos.
    const filterReceived = () => {

        const received = allReceives.filter((item)=>item.type === true)
        setReceived(received)
    }

    //Todos os não recebidos.
    const filterNoReceived = () => {

        const received = allReceives.filter((item)=>item.type === false)
        setNoReceived(received)
    }

    //Filtro de receitas do mês atual

    const filterMesAtual = () => {
        const filterPorMesReceive = received.filter((item)=>item.data.split("-"[1]===mes)
        )
        setFilterPorMesReceiveAtual(filterPorMesReceive)
    }

    useEffect(()=>{
        filterMesAtual()
    },[])

    //Filtrar por mes escolhido pelo usuário
    const filterMonthReceived = (mes) => {
        const filterPorMesReceive = received.filter((item)=>item.data.split("-"[1]===mes)
        )
        setFilterPorMesReceive(filterPorMesReceive)
    }

    //Transforma receives não recebidas em recebidas.
    const editSpend = (id) => {
        api.patch(`receives/${id}`,
        {
            "type": true
        },{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .catch(resp=>console.log(resp))
    }

    const lancReceive = (data) => {
        api.post(`receive`,data,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .catch(resp=>console.log(resp))
    }

    return (
        <ReceivesContext.Provider value={{}}>
            {children}
        </ReceivesContext.Provider>
    )
}

const Receive = ()=> useContext(ReceivesContext)