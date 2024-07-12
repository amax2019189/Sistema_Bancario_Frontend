import { useState } from "react";
import axios from "axios";
import './convetidor.css'
import Sidebar from "../sidebar/Sidebar";

function App() {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        amount: '',
    })

    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const currencyCode = ["GTQ", "EUR", "MXN", "USD", "HNL", "NIO", "CRC", "CAD"];

    const handleChange = (evento) => {
        const { name, value } = evento.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    console.log(formData)
    const handleSubmit = async (evento) => {
        evento.preventDefault()
        try {
            const response = await axios.post(
                'http://127.0.0.1:8080/sistemaBancario/v1/convert',
                formData
            )

            setResult(response?.data)
            console.log(response.data)
            setError('')
        } catch (error) {
            setError(
                error?.response ? error?.response.data : error?.message
            )
        }
    }

    return (
        <>
            <div id="bodyConversonr" className="h-screen absolute">
                <Sidebar />

                <div classname="absolute gap-2 flex-col">
                    <div className="ml-[55rem]"> <section className="converter">
                        <form onSubmit={handleSubmit}>

                            <select
                                name="from"
                                value={formData.from}
                                onChange={handleChange}
                                className="input"
                            >

                                <option value="">moneda de origen</option>
                                {currencyCode.map((code) => (
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}
                            </select>

                            <select
                                name="to"
                                value={formData.to}
                                onChange={handleChange}
                                className="input"
                            >

                                <option value="">moneda de destino</option>
                                {currencyCode.map((code) => (
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}
                            </select>

                            <input type="number" name="amount" value={formData.amount}
                                onChange={handleChange}
                                placeholder="ingrese el valor a convertir"
                                className="input" />

                            <button type="submit" className="submit-btn">
                                convertir
                            </button>

                        </form>
                        {result && (
                            <div className="result">
                                <p>total de la conversion: {result.conversionAmount}{result.target}</p>
                                <p>Tipo de cambio: {result.conversionRate}</p>

                            </div>
                        )}
                        {error && <p className="error">Error:{error}</p>}

                    </section></div>

                </div>
            </div>
        </>

    )
}

export default App