import { useContext, createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../service/api";

const UsersContext = createContext()

export const UserProvider = ({ children }) => {

    const history = useHistory()

    const [token, setToken] = useState(localStorage.getItem("@tokenfinan") || "")

    const [id, setId] = useState(localStorage.getItem("@idfinan") || "")

    const [errorSign, setErrorSign] = useState("")

    const [errorLogin, setErrorLogin] = useState("")




    const SignUp = (data) => {
        api.post("/signup", data)
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

                setToken(resp.data.accessToken)

                localStorage.setItem("@tokenfinan", resp.data.accessToken)

                setId(resp.data.user.id)

                localStorage.setItem("idfinan", resp.data.user.id)

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
        <UsersContext.Provider value={{ token, id, errorSign, errorLogin, Login, SignUp, Logout }}>
            {children}
        </UsersContext.Provider>
    )
}

export const Users = () => useContext(UsersContext)