import { useState } from "react";
import { DepositForm } from "./DepositForm";
import { EditDepositForm } from "./EditDepositForm";
import { ReverseDepositForm } from "./ReverseDepositForm";
import NavbarHome from '../NavbarHome'
import SectionA from "../../pages/homePage/SectionA";
import React, { useEffect } from "react";


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
            <nav className="bg-gray-900 w-80 h-screen flex flex-col gap-10 border-r border-none fixed">
                <div className="logo text-2xl font-bold text-center h-16 flex items-center justify-center mt-[3rem] text-red-50">HOLA</div>
                {userData ? (
                    <div className="user flex items-center justify-center flex-col gap-4 border-none border-emerald-slate-50 ">
                        <img className="w-24 rounded-full shadow-xl" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="User Avatar" />
                        <div className="flex flex-col items-center">
                            <span className="font-semibold text-lg text-emerald-700 text-[28px] uppercase">{userData.name}</span>
                            <span className="text-white text-[20px]">{userData.email}</span>
                            <span className="font-semibold text-slate-500">{userData.rolerUser} </span>

                        </div>
                        <div className="text-sm text-white">
                        </div>
                    </div>
                ) : (
                    <p>Error al iniciar sesion de usuario...</p>
                )}
                <div className='bg-cyan-600 w-full h-full '>
                    <ul className="px-[4rem] space-y-6  rounded-lg mt-[3rem]">
                        <li>
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href={"/user"}>Inicio</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href={"/MyAccount"}>Mi cuenta</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href="#">Depositos</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href="#">Transferencias</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href="#">Conversor de divisas</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href="#">Contact</a>
                        </li>
                        <li>
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href="#">Logout</a>
                        </li>

                    </ul></div>

            </nav>
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