import React, { useEffect, useState } from "react";
import { logout, useUserDetails } from "../../shared/hooks";


const AccountDetails = () => {
  const [userData, setUserData,] = useState( null );


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

  const handleLogout = () => {
    logout()
  }

  return (
    <div id="body" className="bg-slate-50 h-screen flex">
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
              <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href={"/deposits"}>Depositos</a>
            </li>
            <li>
              <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href={"/transfer"}>Transferencias</a>
            </li>
            <li>
              <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href={"conversor"}>Conversor de divisas</a>
            </li>
            <li>
              <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href="#">Contact</a>
            </li>
            <li>
              <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href={handleLogout}>Logout</a>
            </li>

          </ul></div>

      </nav>
      <div className="container mx-auto mt-[5rem] w-full  flex-col ml-80">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Perfil de Usuario</h1>
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mi cuenta</h1>

        {userData ? (
          <div className="bg-white p-8 shadow-2xl rounded-lg max-w-lg mx-auto">
            <div className="flex flex-col items-center mb-6">
              <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="User Avatar" className="w-[18rem] h-[18rem] rounded-full border-4 border-gray-300 mb-4" />
              <p className="text-2xl font-semibold text-gray-900">
                {userData.name} {userData.lastname}
              </p>
              <p className="text-lg text-gray-600">{userData.email}</p>
            </div>
            <div className="border-t border-gray-200 mt-6 pt-6">
              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">Rol:</span> {userData.roleUser}
              </p>
              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">Teléfono:</span> {userData.numbercel}
              </p>
              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">Dirección:</span> {userData.address}
              </p>

              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">Fecha de nacimiento:</span> {userData.birthdate}
              </p>
              <p className="text-xl text-gray-700">
                <span className="font-semibold text-gray-900">Email:</span> {userData.email}
              </p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>

  );
};

export default AccountDetails;
