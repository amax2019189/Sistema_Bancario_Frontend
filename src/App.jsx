import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App