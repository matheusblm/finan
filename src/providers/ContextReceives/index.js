import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "../../service/api";

const ReceivesContext = createContext();

export const ReceiveProvider = ({ children }) => {  

  const [received, setReceived] = useState([]);

  const [noReceived, setNoReceived] = useState([]);

  const [allReceives, setAllReceives] = useState([]);

  const [filterPorMesReceive, setFilterPorMesReceive] = useState();

  const [filterPorMesReceiveAtual, setFilterPorMesReceiveAtual] = useState();

  const data = new Date();

  const mes = data.getMonth() + 1;


  //Pega todos os receber.




  const loadReceives = useCallback(async (userId, token) => {
    try {
      const response = await api.get(`/receive/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setAllReceives(response.data);
    } catch (err) {
      console.log("err");
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

  //Filtro de receitas do mês atual

  const filterActualMonthReceive = () => {
    if (received) {
      const filterPorMesReceive = received.filter(
        (item) => item.data.split("-")[1] === mes && item.type === true
      );
      setFilterPorMesReceiveAtual(filterPorMesReceive);
    }
  };

  useEffect(() => {
    filterActualMonthReceive();
  }, []);

  //Filtrar por mes escolhido pelo usuário
  const filterMonthReceived = (mes, ano) => {
    const filterPorAnoReceive = received.filter(
      (item) => item.data.split("-")[0] === ano && item.type === true
    );
    const filterPorMesReceive = filterPorAnoReceive.filter(
      (item) => item.data.split("-")[0] === ano && item.type === true
    );
    setFilterPorMesReceive(filterPorMesReceive);
  };

  //Transforma receives não recebidas em recebidas.


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


  const lancReceive = (data, token, id) => {
    const newData = { ...data, userId: id };
    api
      .post(`/receive`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((resp) => console.log(resp));
  };

  return (
    <ReceivesContext.Provider
      value={{
        received,
        noReceived,
        allReceives,
        filterPorMesReceive,
        filterPorMesReceiveAtual,
        filterReceived,
        filterNoReceived,
        filterActualMonthReceive,
        filterMonthReceived,
        editReceive,
        lancReceive,
        loadReceives,
      }}
    >
      {children}
    </ReceivesContext.Provider>
  );
};

export const useReceive = () => useContext(ReceivesContext);
