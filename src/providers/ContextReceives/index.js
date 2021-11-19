import { useContext, createContext, useState, useCallback } from "react";
import { api } from "../../service/api";
import { useToast } from "@chakra-ui/react";

const ReceivesContext = createContext();

export const ReceiveProvider = ({ children }) => {
  const toast = useToast();
  const [received, setReceived] = useState([]);
  const [noReceived, setNoReceived] = useState([]);
  const [allReceives, setAllReceives] = useState([]);

  const [openModalWallet, setOpenModalWallet] = useState(false);

  const loadReceives = useCallback(async (userId, token) => {
    try {
      const response = await api.get(`/receive/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      response.data.length > 0 && setAllReceives(response.data);
    } catch (err) {}
  }, []);

  // Todos os recebidos.
  const filterReceived = () => {
    const received = allReceives.filter((item) => item.type === true);
    setReceived(received);
  };

  //Todos os não recebidos.
  const filterNoReceived = () => {
    const received = allReceives.filter((item) => item.type === false);
    setNoReceived(received);
  };

  const editReceive = (id, token) => {
    const userId = localStorage.getItem("idfinan");
    api
      .patch(
        `/receive/${id}`,
        {
          type: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(async (_) => await loadReceives(userId, token))
      .then((resp) =>
        toast({
          title: "Lançamento editado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      )
      .catch((erro) =>
        toast({
          title: "Erro ao editar lançamento",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      );
  };

  const lancReceive = async (data, token) => {
    const userId = localStorage.getItem("idfinan");
    await api
      .post(`/receive`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (_) => await loadReceives(userId, token))
      .then((resp) =>
        toast({
          title: "Lançamento criado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      )
      .catch((erro) =>
        toast({
          title: "Erro ao realizar lançamento",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      );
  };

  const newReceive = allReceives
    .filter(
      (item) =>
        Number(item.data.split("-")[0]) === new Date().getFullYear() &&
        item.type === false
    )
    .filter(
      (item) =>
        Number(item.data.split("-")[1]) === new Date().getMonth() + 1 &&
        item.type === false
    );

  const newReceived = allReceives
    .filter(
      (item) =>
        Number(item.data.split("-")[0]) === new Date().getFullYear() &&
        item.type === true
    )
    .filter(
      (item) =>
        Number(item.data.split("-")[1]) === new Date().getMonth() + 1 &&
        item.type === true
    );

  const receiveTotal = newReceive.reduce((acc, bill) => acc + bill.value, 0);
  const receivedTotal = newReceived.reduce((acc, bill) => acc + bill.value, 0);
  const handleModalWallet = () => setOpenModalWallet(!openModalWallet);

  const deleteReceive = (idReceive, token) => {
    const userId = localStorage.getItem("idfinan");
    api
      .delete(`/receive/${idReceive}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (_) => await loadReceives(userId, token))

      .then((_) =>
        toast({
          title: "Lançamento deletado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      )
      .catch((erro) =>
        toast({
          title: "Erro ao deletar lançamento",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
      );
  };

  return (
    <ReceivesContext.Provider
      value={{
        received,
        noReceived,
        allReceives,
        filterReceived,
        filterNoReceived,
        editReceive,
        lancReceive,
        loadReceives,
        newReceive,
        receivedTotal,
        receiveTotal,
        openModalWallet,
        handleModalWallet,
        deleteReceive,
      }}
    >
      {children}
    </ReceivesContext.Provider>
  );
};

export const useReceive = () => useContext(ReceivesContext);
