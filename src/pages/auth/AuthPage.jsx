import { useState } from "react"
import { Login } from "../../pages/login/Login"
import { Register } from "../../pages/register/Register"

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState( true )
    const handleAuthPageToggle = () => {
        setIsLogin( ( prev ) => !prev )
    }
    return (
        <div>
            {isLogin ? (
                <Login switchAuthHandler={handleAuthPageToggle} />
            ) : (
                <Register switchAuthHandler={handleAuthPageToggle} />
            )}
        </div>
    )
}
