import { useState } from "react";
import { DepositForm } from "./DepositForm";
import { EditDepositForm } from "./EditDepositForm";
import { ReverseDepositForm } from "./ReverseDepositForm";
import { RegisterServiceForm } from "../../pages/registerService/registerServiceForm";
import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import HeadPage from "../HeadPage";


export const ParentComponent = () => {
    const [showDepositForm, setShowDepositForm] = useState( false );
    const [showEditForm, setShowEditForm] = useState( false );
    const [showReverseForm, setShowReverseForm] = useState( false )
    const [showServiceForm, setShowServiceForm] = useState( false );

    const toggleDepositForm = () => {
        setShowDepositForm( !showDepositForm );
        setShowEditForm( false );
        setShowReverseForm( false )
        setShowServiceForm( false )
    };

    const toggleEditForm = () => {
        setShowEditForm( !showEditForm );
        setShowDepositForm( false );
        setShowReverseForm( false )
        setShowServiceForm( false )
    };

    const toggleReverseForm = () => {
        setShowReverseForm( !showReverseForm );
        setShowDepositForm( false );
        setShowEditForm( false );
        setShowServiceForm( false )
    };

    //toggle Service register
    const toggleServiceForm = () => {
        setShowServiceForm( !showServiceForm )
        setShowDepositForm( false );
        setShowEditForm( false );
        setShowReverseForm( false )
    }

    const [userData, setUserData] = useState( null );

    useEffect( () => {
        // Función para obtener los datos del usuario desde localStorage
        const getUserDataFromLocalStorage = () => {
            const user = localStorage.getItem( "user" );
            if ( user ) {
                const parsedUser = JSON.parse( user );
                setUserData( parsedUser );
            }
        };

        getUserDataFromLocalStorage();
    }, [] );

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
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
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
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
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
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
                        onClick={toggleReverseForm}
                    >
                        {showReverseForm ? 'Ocultar Formulario de Reversión' : 'Mostrar Formulario de Reversión'}
                    </button>
                    {showReverseForm && <ReverseDepositForm />}
                </div>

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://st3.depositphotos.com/1007283/15266/i/450/depositphotos_152667528-stock-photo-registration-printed-on-rubber-stamp.jpg"
                        alt="Imagen de Registro de Servicio"
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <button
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full"
                        onClick={toggleServiceForm}
                    >
                        {showServiceForm ? 'Ocultar Formulario de Registro de Servicio' : 'Mostrar Formulario de Registro de Servicio'}
                    </button>
                    {showServiceForm && <RegisterServiceForm />}
                </div>

            </div>
        </>
    );
};