import { useContext, createContext, useState, useCallback } from "react";
import { api } from "../../service/api";

const SpendContext = createContext();

export const SpendProvider = ({ children }) => {
  const [spended, setSpended] = useState([]);
  const [noSpend, setNoSpend] = useState([]);
  const [allSpends, setAllSpends] = useState([]);

  const loadSpends = useCallback(async (userId, token) => {
    try {
      const response = await api.get(`/spend/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      response.data.length > 0 && setAllSpends(response.data);
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

  const lancSpend = async (data, token) => {
    const userId = localStorage.getItem("idfinan");
    await api
      .post(`spend`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (_) => await loadSpends(userId, token))
      .catch((resp) => console.log(resp));
  };

  // const newSpendAll = allSpends.filter((item) => item.type === false);
  // const newSpendedAll = allSpends.filter((item) => item.type === true);

  const newSpend = allSpends
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
  const newSpended = allSpends
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

  const spendTotal = newSpend.reduce((acc, bill) => acc + bill.value, 0);
  const spendedTotal = newSpended.reduce((acc, bill) => acc + bill.value, 0);

  const groupBy = (objetoArray, propriedade) => {
    return objetoArray.reduce((acc, obj) => {
      let key = obj[propriedade];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj.value);
      return acc;
    }, {});
  };

  const arraySpendValue = groupBy(newSpend, "category");

  for (let value in arraySpendValue) {
    arraySpendValue[value] = arraySpendValue[value].reduce(
      (acc, val) => acc + val,
      0
    );
  }

  const arraySpend = Object.values(arraySpendValue);

  const arrayNameSpend = Object.keys(arraySpendValue);

  return (
    <SpendContext.Provider
      value={{
        spended,
        noSpend,
        allSpends,
        filterReceived,
        filterNoReceived,
        editSpend,
        lancSpend,
        loadSpends,
        spendedTotal,
        newSpend,
        spendTotal,
        arraySpend,
        arrayNameSpend,
      }}
    >
      {children}
    </SpendContext.Provider>
  );
};

export const useSpend = () => useContext(SpendContext);
