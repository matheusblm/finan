import { useContext,createContext,useState, useEffect } from "react";
import { api } from "../../service/api";

const AccountContext = createContext()

export const AccountProvider = ({children})=>{

    const [account,setAccount] = useState([])

    const userId = Number(localStorage.getItem("idfinan")) || ""

    const token = localStorage.getItem("@tokenfinan") || ""
    
    const getAccount = (userId,token) => {

        api
        .get(`/wallet?userId=${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(resp=> resp.data.length > 0 && setAccount(resp.data))
          .catch(erro=>console.log(erro))
    }

    useEffect(()=>
           getAccount(userId,token)
       ,[])
    
    //const wallet = account.reduce((acc,elem)=>acc+elem.saldo,0)

    const letAccount = (data,token)=>{
        api.post("/wallet",data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(resp=>console.log(resp.data))
          .catch(error=>console.log(error))
    }

    const editAccountSaldo = (idAccount)=>{
        api.patch(`/wallet${idAccount}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(resp=>console.log(resp))
          .catch(error=>console.log(error))
    }

    const deleteAccount = (idAccount,token)=>{
      api.delete(`/wallet${idAccount}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(resp=>console.log(resp))
      .catch(err=>console.log(err))
    }
    


    return (
        <AccountContext.Provider value={{account,getAccount,letAccount,editAccountSaldo,deleteAccount}}>
            {children}
        </AccountContext.Provider>
    )
}

export const Account = ()=> useContext(AccountContext)