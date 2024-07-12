import { useState } from "react";
import { DepositForm } from "./DepositForm";
import { EditDepositForm } from "./EditDepositForm";
import { ReverseDepositForm } from "./ReverseDepositForm";
import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import HeadPage from "../HeadPage";


export const ParentComponent = () => {
    const [showDepositForm, setShowDepositForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showReverseForm, setShowReverseForm] = useState(false)

    const toggleDepositForm = () => {
        setShowDepositForm(!showDepositForm);
        setShowEditForm(false); // Ensure only one form is shown at a time
        setShowReverseForm(false)
    };

    const toggleEditForm = () => {
        setShowEditForm(!showEditForm);
        setShowDepositForm(false); // Ensure only one form is shown at a time
        setShowReverseForm(false)
    };

    const toggleReverseForm = () => {
        setShowReverseForm(!showReverseForm);
        setShowDepositForm(false); // Ensure only one form is shown at a time
        setShowEditForm(false);
    };


    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Función para obtener los datos del usuario desde localStorage
        const getUserDataFromLocalStorage = () => {
            const user = localStorage.getItem("user");
            if (user) {
                const parsedUser = JSON.parse(user);
                setUserData(parsedUser);
            }
        };

        getUserDataFromLocalStorage();
    }, []);

    return (
        <>
            <Sidebar />
            <div className=" ml-80 p-none ">
                <HeadPage />
            </div>

            <div className=" w-auto flex items-center gap-7 ml-80 p-7 ">

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1680792417523-156a3568162e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Imagen de Depósito"
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <button
                        className="mb-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-700 w-full"
                        onClick={toggleDepositForm}
                    >
                        {showDepositForm ? 'Ocultar Formulario de Depósito' : 'Mostrar Formulario de Depósito'}
                    </button>
                    {showDepositForm && <DepositForm />}
                </div>

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Imagen de Edición"
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <button
                        className="mb-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-700 w-full"
                        onClick={toggleEditForm}
                    >
                        {showEditForm ? 'Ocultar Formulario de Edición' : 'Mostrar Formulario de Edición'}
                    </button>
                    {showEditForm && <EditDepositForm />}
                </div>

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1551260627-fd1b6daa6224?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Imagen de Reversión"
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <button
                        className="mb-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-700 w-full"
                        onClick={toggleReverseForm}
                    >
                        {showReverseForm ? 'Ocultar Formulario de Reversión' : 'Mostrar Formulario de Reversión'}
                    </button>
                    {showReverseForm && <ReverseDepositForm />}
                </div>
            </div>
        </>
    );
};