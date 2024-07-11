import { useState } from "react";
import { DepositForm } from "./DepositForm";
import { EditDepositForm } from "./EditDepositForm";
import { ReverseDepositForm } from "./ReverseDepositForm";
import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";


export const ParentComponent = () => {
    const [showDepositForm, setShowDepositForm] = useState( false );
    const [showEditForm, setShowEditForm] = useState( false );
    const [showReverseForm, setShowReverseForm] = useState( false )

    const toggleDepositForm = () => {
        setShowDepositForm( !showDepositForm );
        setShowEditForm( false ); // Ensure only one form is shown at a time
        setShowReverseForm( false )
    };

    const toggleEditForm = () => {
        setShowEditForm( !showEditForm );
        setShowDepositForm( false ); // Ensure only one form is shown at a time
        setShowReverseForm( false )
    };

    const toggleReverseForm = () => {
        setShowReverseForm( !showReverseForm );
        setShowDepositForm( false ); // Ensure only one form is shown at a time
        setShowEditForm( false );
    };


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
            <div className="right w-full flex gap-2 flex-col ml-80">
                <div className="border-black">
                    <button

                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        onClick={toggleDepositForm}
                    >
                        {showDepositForm ? 'Ocultar Formulario de Depósito' : 'Mostrar Formulario de Depósito'}
                    </button>

                    {showDepositForm && <DepositForm />}
                </div>


                <div className="border-black">  <button
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={toggleEditForm}
                >
                    {showEditForm ? 'Ocultar Formulario de Edición' : 'Mostrar Formulario de Edición'}
                </button>
                    {showEditForm && <EditDepositForm />}</div>


                <div className="boder-black"> <button
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={toggleReverseForm}
                >
                    {showReverseForm ? 'Ocultar Formulario de Reversión' : 'Mostrar Formulario de Reversión'}
                </button>
                    {showReverseForm && <ReverseDepositForm />}</div>


            </div>

        </>
    );
};