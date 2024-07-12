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

            <div className="h-auto w-auto items-center gap-6 ml-80 p-none">
                <HeadPage></HeadPage> </div>
            <div className="right w-auto flex flex-grow-2 items-center gap-6 ml-80 p-4">

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://via.placeholder.com/600x200"
                        alt="Imagen de Depósito"
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <button
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
                        onClick={toggleDepositForm}
                    >
                        {showDepositForm ? 'Ocultar Formulario de Depósito' : 'Mostrar Formulario de Depósito'}
                    </button>
                    {showDepositForm && <DepositForm />}
                </div>

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://via.placeholder.com/600x200"
                        alt="Imagen de Edición"
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <button
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
                        onClick={toggleEditForm}
                    >
                        {showEditForm ? 'Ocultar Formulario de Edición' : 'Mostrar Formulario de Edición'}
                    </button>
                    {showEditForm && <EditDepositForm />}
                </div>

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://via.placeholder.com/600x200"
                        alt="Imagen de Reversión"
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <button
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
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