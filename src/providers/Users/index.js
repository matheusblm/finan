import { useContext, createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../service/api";
import { useToast,Box } from "@chakra-ui/react"

const UsersContext = createContext()

export const UserProvider = ({ children }) => {

    const history = useHistory()

    const toast = useToast()

    const [token, setToken] = useState(localStorage.getItem("@tokenfinan") || "")

    const [id, setId] = useState(Number(localStorage.getItem("idfinan")) || "")

    const [username,setUserName] = useState(localStorage.getItem("usernamefinan") || "")

    const [errorSign, setErrorSign] = useState("")

    const [errorLogin, setErrorLogin] = useState("")




    const SignUp = (data) => {
        api.post("/signup", data)
            .then(_ => {
                toast({
                    
                    description: "Cadastro realizado com sucesso!",
                    status: "success",
                    duration: 1800,
                    isClosable: true,
                    position: "top",
                    
                })
                history.push("/login")
            })
            .catch(resp => {
                toast({
                    title: "Falha no cadastro",
                    description: "E-mail já cadastrado",
                    status: "error",
                    duration: 1800,
                    isClosable: true,
                    position: "top",
                  })
                setErrorSign(resp.message)
            })
    }

    const Login = (data) => {
        api.post("/login", data)
            .then(resp => {

                setToken(resp.data.accessToken)

                localStorage.setItem("@tokenfinan", resp.data.accessToken)

                setId(resp.data.user.id)

                localStorage.setItem("idfinan", resp.data.user.id)

                setUserName(resp.data.user.username)

                localStorage.setItem("usernamefinan", resp.data.user.username)

                history.push("/dashboard")
            })
            .catch(resp => {
                toast({
                    title: "Falha ao logar",
                    description: "E-mail / Senha inválidos",
                    status: "error",
                    duration: 1800,
                    isClosable: true,
                    position: "top",
                  })
                setErrorLogin(resp.message)
            })
    }

    const Logout = () => {
        localStorage.clear()
        window.location.href = "/login"
    }

    return (
        <UsersContext.Provider value={{ 
         token,
         id, 
         username, 
         errorSign, 
         errorLogin, 
         Login, 
         SignUp, 
         Logout }}>
            {children}
        </UsersContext.Provider>
    )
}

export const Users = () => useContext(UsersContext)