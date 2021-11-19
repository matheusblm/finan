import { useContext, createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../service/api";

import { useToast } from "@chakra-ui/react";
import { useReceive } from "../ContextReceives";
import { useSpend } from "../ContextSpend";

const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const toast = useToast();

  const [token, setToken] = useState(localStorage.getItem("@tokenfinan") || "");

  const [id, setId] = useState(Number(localStorage.getItem("idfinan")) || "");

  const [username, setUserName] = useState(
    localStorage.getItem("usernamefinan") || ""
  );

  const [limits] = useState(JSON.parse(localStorage.getItem("limits")) || "");

  const [errorSign, setErrorSign] = useState("");

  const [errorLogin, setErrorLogin] = useState("");

  const { loadReceives } = useReceive();
  const { loadSpends } = useSpend();

  const SignUp = (data) => {
    const limits = [
      {
        alimentacao: 0,
        assinaturas: 0,
        bares: 0,
        casa: 0,
        educacao: 0,
        familia: 0,
        impostos: 0,
        lazer: 0,
        outros: 0,
        roupas: 0,
        transportes: 0,
      },
    ];
    const newData = { ...data, limits };
    api
      .post("/signup", newData)
      .then((_) => {
        toast({
          description: "Cadastro realizado com sucesso!",
          status: "success",
          duration: 1800,
          isClosable: true,
          position: "top",
        });
        history.push("/login");
      })
      .catch((resp) => {
        toast({
          title: "Falha no cadastro",
          description: "E-mail já cadastrado",
          status: "error",
          duration: 1800,
          isClosable: true,
          position: "top",
        });
        setErrorSign(resp.message);
      });
  };

  const Login = async (data) => {
    await api
      .post("/login", data)
      .then(async (resp) => {
        await loadReceives(resp.data.user.id, resp.data.accessToken);
        await loadSpends(resp.data.user.id, resp.data.accessToken);
        localStorage.setItem(
          "limits",
          JSON.stringify(resp.data.user.limits[0])
        );

        setToken(resp.data.accessToken);

        localStorage.setItem("@tokenfinan", resp.data.accessToken);

        setId(resp.data.user.id);

        localStorage.setItem("idfinan", resp.data.user.id);

        setUserName(resp.data.user.username);

        localStorage.setItem("usernamefinan", resp.data.user.username);

        history.push("/dashboard");
      })

      .catch((resp) => {
        toast({
          title: "Falha ao logar",
          description: "E-mail / Senha inválidos",
          status: "error",
          duration: 1800,
          isClosable: true,
          position: "top",
        });
        setErrorLogin(resp.message);
      });
  };

  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <UsersContext.Provider
      value={{
        token,
        id,
        limits,
        username,
        errorSign,
        errorLogin,
        Login,
        SignUp,
        Logout,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export const Users = () => useContext(UsersContext);
