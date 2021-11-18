import { useContext,createContext,useState, useEffect } from "react";
import { useSpend } from "../ContextSpend";
import { api } from "../../service/api";

const AccountContext = createContext()

export const AccountProvider = ({children})=>{

    const [account,setAccount] = useState([])

    const getAccount = (token) => {
        api
        .get("/account", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(resp=>setAccount(resp.data))
          .catch(erro=>console.log(erro))
    }

    useEffect(()=>
        getAccount()
    ,[])

    const wallet = account.reduce((acc,elem)=>acc+elem.saldo,0)

    const letAccount = (data,token)=>{
        api.post("/account",data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(resp=>console.log(resp))
          .catch(error=>console.log(error))
    }

    const editAccountSaldo = (idaccount,token)=>{
        api.patch(`/account${idaccount}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(resp=>console.log(resp))
          .catch(error=>console.log(error))
    }


    return (
        <AccountContext.Provider value={{wallet,letAccount,editAccountSaldo}}>
            {children}
        </AccountContext.Provider>
    )
}

export const Account = ()=> useContext(AccountContext)