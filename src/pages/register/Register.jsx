import React from 'react'

function Register() {
    return (
        <div className="h-screen dark:bg-gray-900 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registrate</h1>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">Usuario </label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Usuario"
                        />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="@email"
                        />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Contrseña</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">Confirme su contraseñas</label>
                        <input
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirma tu contraseña"
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Register
                    </button>
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>)
}

export default Register