import AccountDetails from '../../components/account/account'
import NavbarHome from '../../components/NavbarHome'
import SectionA from '../homePage/SectionA'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from "react";



const AccountPage = () => {
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
    }, []); // Se ejecuta solo una vez al montar el componente    return (
    return (
        <div id="body" className="bg-slate-50 h-screen flex">
            <nav className="bg-gray-900 w-80 h-screen flex flex-col gap-10 border-r border-slate-100 fixed">
                <div className="logo text-2xl font-bold text-center h-16 flex items-center justify-center mt-[5rem] text-red-50">HOLA</div>
                {userData ? (
                    <div className="user flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-4">
                        <img className="w-24 rounded-full shadow-xl" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="User Avatar" />
                        <div className="flex flex-col items-center">
                            <span className="font-semibold text-lg text-emerald-700 text-[22px]">{userData.name}</span>
                            <span className="text-white text-[20px]">{userData.email}</span>
                        </div>
                        <div className="text-sm text-white">
                            <span className="font-semibold text-slate-500">{userData.rolerUser} </span>
                        </div>
                    </div>
                ) : (
                    <p>Error al iniciar sesion de usuario...</p>
                )}
                <ul className="px-6 space-y-2">
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg" href="#">Haber Yönetimi</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg" href="#">CMS Hesapları</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg" href="#">Destek Talepleri</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg" href="#">Etkinlik Yönetimi</a>
                    </li>
                </ul>
            </nav>
            <div className="right w-full flex gap-2 flex-col ml-80">
                <section className="bg-white">
                    <br />
                    <section className="">
                        <div className="container mx-auto mb-[5%]">
                            <div className="flex justify-center">
                            </div>
                        </div>
                    </section>
                    <div className="container px-6 py-10 mx-auto">
                        <div className="lg:flex lg:items-center">
                            <div className="w-full space-y-12 lg:w-1/2 mt-6">
                                <div>
                                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl">Bienvenido<br /> a nuestro sistema bancario</h1>
                                    <div className="mt-2">
                                        <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                        <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                        <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                                    </div>
                                </div>
                                <AccountDetails />
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                        </svg>
                                    </span>
                                    <div className="mt-4 md:mx-4 md:mt-0">
                                        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Nuestros sevicios</h1>
                                        <p className="mt-3 text-gray-500">Comunicacion</p>
                                        <p className="mt-3 text-gray-500">Flexibidad</p>
                                        <p className="mt-3 text-gray-500">Pensamiento creativo</p>
                                        <p className="mt-3 text-gray-500">Trabajo en equipo</p>
                                        <p className="mt-3 text-gray-500">Pensamiento crítico</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mt-[25px] w-full ml-[10rem] max-[1000px]:mx-[auto]">
                                    <div className="mt-[auto]">
                                        <div className="w-[full] h-full">
                                            <div className="mt-5">
                                                <img className="w-auto h-auto rounded-md mx-[auto]" src="../src/assets/svg2.svg" alt="Graphic Design" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <SectionA />
            </div>
        </div>
    );
};

export default AccountPage