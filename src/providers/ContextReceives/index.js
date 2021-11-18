import { useContext, createContext, useState, useCallback } from "react";
import { api } from "../../service/api";

const ReceivesContext = createContext();

export const ReceiveProvider = ({ children }) => {
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
    } catch (err) {
      console.log(err);
    }
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
      .catch((resp) => console.log(resp));
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
      .catch((resp) => console.log(resp));
  };

  // const newReceiveAll = allReceives.filter((item) => item.type === false);
  // const newReceivedAll = allReceives.filter((item) => item.type === true);
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
      }}
    >
      {children}
    </ReceivesContext.Provider>
  );
};

export const useReceive = () => useContext(ReceivesContext);
