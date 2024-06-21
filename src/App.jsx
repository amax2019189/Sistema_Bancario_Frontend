<<<<<<< HEAD
import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import routes from "./routes.jsx"

export const App = () => {
    let element = useRoutes( routes );
    return (
        <>
            {element}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}

export default App;
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import HomePage from './pages/homePage/HomePage.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>} />
                <Route path="/register" element={<Register />} />
                <Route path="/homePage" element={<HomePage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
>>>>>>> 91fd46b7f09e2c9ed2cd5c442645b5620a4c3c63
