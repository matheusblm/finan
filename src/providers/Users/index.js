import { useContext, createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../service/api";

const UsersContext = createContext()

export const UserProvider = ({ children }) => {

    const history = useHistory()

    const [token, setToken] = useState(localStorage.getItem("@tokenfinan") || "")

    const [id, setId] = useState(Number(localStorage.getItem("idfinan")) || "")

    const [username, setUserName] = useState(localStorage.getItem("usernamefinan") || "")

    const [limits, setLimits] = useState(JSON.parse(localStorage.getItem("limits")) || "")

    const [errorSign, setErrorSign] = useState("")

    const [errorLogin, setErrorLogin] = useState("")


    const SignUp = (data) => {
        const limits = [{ alimentacao: 0, assinaturas: 0, bares: 0, casa: 0, educacao: 0, familia: 0, impostos: 0, lazer: 0, outros: 0, roupas: 0, transportes: 0 }]
        const newData = { ...data, limits }
        api.post("/signup", newData)
            .then(_ => {
                history.push("/login")
            })
            .catch(resp => {
                setErrorSign(resp.message)
            })
    }

    const Login = (data) => {
        api.post("/login", data)
            .then(resp => {

                setLimits(resp.data.user.limits)

                localStorage.setItem("limits", JSON.stringify(resp.data.user.limits[0]))

                setToken(resp.data.accessToken)

                localStorage.setItem("@tokenfinan", resp.data.accessToken)

                setId(resp.data.user.id)

                localStorage.setItem("idfinan", resp.data.user.id)

                setUserName(resp.data.user.username)

                localStorage.setItem("usernamefinan", resp.data.user.username)

                history.push("/dashboard")
            })
            .catch(resp => {
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
            limits,
            username,
            errorSign,
            errorLogin,
            Login,
            SignUp,
            Logout
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export const Users = () => useContext(UsersContext)