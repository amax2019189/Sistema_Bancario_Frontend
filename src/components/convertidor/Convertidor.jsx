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
            <Sidebar />
            <div className="ml-80 p-nonel">
                <div className="top-0 right-0 flex items-center justify-center w-full p-[5rem]">
                    <div className="flex flex-col md:flex-row items-center gap-[5rem] ml-[8rem] mt-[6rem]">
                        <div className="md:block md:w-1/2 lg:w-2/5  w-auto h-auto">
                            <img
                                src="../public/svg1banck.svg"
                                alt="Conversión de Moneda"
                                className="w-auto h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
                            <div className="flex justify-center mb-4">
                                {/* Espacio para SVG */}
                                <div className="w-auto h-auto">
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/588/193/small/coin-with-dollar-sign-golden-dollar-symbol-gold-coin-3d-stack-of-gold-coins-icon-isolated-symbol-png.png" alt="" srcset=""
                                        className="w-auto h-auto" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-6 text-center">Convertidor de Moneda</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <select
                                    name="from"
                                    value={formData.from}
                                    onChange={handleChange}
                                    className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Moneda de Origen</option>
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
                                    className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Moneda de Destino</option>
                                    {currencyCode.map((code) => (
                                        <option key={code} value={code}>
                                            {code}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    placeholder="Ingrese el valor a convertir"
                                    className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                <button
                                    type="submit"
                                    className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                                >
                                    Convertir
                                </button>
                            </form>

                            {result && (
                                <div className="result mt-6 p-4 bg-gray-100 rounded-lg">
                                    <p className="text-lg font-semibold">Total de la conversión: {result.conversionAmount} {result.target}</p>
                                    <p>Tipo de cambio: {result.conversionRate}</p>
                                </div>
                            )}

                            {error && <p className="error text-red-500 mt-4">Error: {error}</p>}
                        </div>
                    </div>
                </div></div>


        </>
    );

}

export default App