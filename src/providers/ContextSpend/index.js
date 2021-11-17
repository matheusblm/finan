import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "../../service/api";

const SpendContext = createContext();

export const SpendProvider = ({ children }) => {
  const [spended, setSpended] = useState([]);

  const [noSpend, setNoSpend] = useState([]);

  const [allSpends, setAllSpends] = useState([]);

  const [filterPorMesSpend, setFilterPorMesSpend] = useState();

  const [filterPorMesSpendAtual, setFilterPorMesSpendAtual] = useState();

  const data = new Date();

  const mes = data.getMonth() + 1;

  //Pegar todos os spend


  const loadSpends = useCallback(async (userId, token) => {
    try {
      const response = await api.get(`/spend/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setAllSpends(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  //Todos os pagos.
  const filterReceived = () => {
    const received = allSpends.filter((item) => item.type === true);
    setSpended(received);
  };

  //Todos os não pagos.
  const filterNoReceived = () => {
    const received = allSpends.filter((item) => item.type === false);
    setNoSpend(received);
  };

  //Filtro de receitas do mês atual

  const filterActualMonthSpend = () => {
    if (spended) {
      const filterPorMesSpend = spended.filter(
        (item) => item.data.split("-")[1] === mes && item.type === true
      );
      setFilterPorMesSpendAtual(filterPorMesSpend);
    }
  };

  //Filtrar por mes escolhido pelo usuário
  const filterMonthSpend = (mes, ano) => {
    const filterPorAnoSpend = spended.filter(
      (item) => item.data.split("-")[0] === ano && item.type === true
    );
    const filterPorMesSpend = filterPorAnoSpend.filter(
      (item) => item.data.split("-")[1] === mes && item.type === true
    );
    setFilterPorMesSpend(filterPorMesSpend);
  };

  //Transformar spends não pago em pagos

  const editSpend = (id, token) => {
    api
      .patch(
        `spend/${id}`,
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



  const lancSpend = (data, token, id) => {
    const newData = { ...data, userId: id };
    api
      .post(`spend`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((resp) => console.log(resp));
  };

  return (
    <SpendContext.Provider
      value={{
        spended,
        noSpend,
        allSpends,
        filterPorMesSpend,
        filterPorMesSpendAtual,
        filterReceived,
        filterNoReceived,
        filterActualMonthSpend,
        filterMonthSpend,
        editSpend,
        lancSpend,
        loadSpends,
      }}
    >
      {children}
    </SpendContext.Provider>
  );
};

export const useSpend = () => useContext(SpendContext);
