import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../../service/api";
import { useToast } from '@chakra-ui/react';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const toast = useToast();

  const [account, setAccount] = useState([]);

  const userId = Number(localStorage.getItem("idfinan")) || "";


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
      .then((resp) => toast({
        title: "Conta editada com sucesso",
        status: "success",
        duration: 2000,
        isClosable: true,
      }))
      .catch((error) => toast({
        title: "Erro ao editar conta",
        status: "error",
        duration: 2000,
        isClosable: true,
      }));
  };

  const deleteAccount = (idAccount, token) => {
    api
      .delete(`/account${idAccount}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => toast({
        title: "Conta deletada com sucesso",
        status: "success",
        duration: 2000,
        isClosable: true,
      }))
      .catch((error) => toast({
        title: "Erro ao deletar conta",
        status: "error",
        duration: 2000,
        isClosable: true,
      }));
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        getAccount,
        letAccount,
        editAccountSaldo,
        deleteAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const Account = () => useContext(AccountContext);
