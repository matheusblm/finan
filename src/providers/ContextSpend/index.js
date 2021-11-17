import { useContext, createContext, useState, useEffect } from "react";
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

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZW1haWwuY29tIiwiaWF0IjoxNjM3MDY1MjMzLCJleHAiOjE2MzcwNjg4MzMsInN1YiI6IjQifQ.F3S55mq_JWB93bH5SkjALp7hDD0tZtZSI33KT9LBxpU";
  const userId = 4;

  //Pegar todos os spend
  const Spends = (token,userId) => {
    api
      .get(`/spend/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        resp.data.length > 0 && setAllSpends(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Spends();
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

  useEffect(() => {
    filterActualMonthSpend();
  }, []);

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
  const editSpend = (id,token) => {
    console.log("editSpend",id,token)
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

  const lancSpend = (data,token) => {
    //console.log(data)
    api
      .post(`spend`, data, {
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
        Spends,
        filterReceived,
        filterNoReceived,
        filterActualMonthSpend,
        filterMonthSpend,
        editSpend,
        lancSpend,
      }}
    >
      {children}
    </SpendContext.Provider>
  );
};

export const useSpend = () => useContext(SpendContext);
