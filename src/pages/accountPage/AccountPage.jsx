import AccountDetails from '../../components/account/account'
import NavbarHome from '../../components/NavbarHome'
import SectionA from '../homePage/SectionA'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from "react";
import { DepositForm } from '../../components/deposits/DepositForm';
import { ReverseDepositForm } from '../../components/deposits/ReverseDepositForm';
import { ParentComponent } from '../../components/deposits/ParentDepositComponent';
import AccountSection from './AccountSection';
import ButtonBanck from '../../components/ButtonBanck';



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
        <><div id="body" className="bg-slate-50 h-screen flex">
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
                            <a className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" href="#">Mi cuenta</a>
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

                <section className="bg-white">
                    <AccountSection />
                    <br />
                    <section className="">
                        <div className="container mx-auto mb-[-12%]">
                            <div className="flex justify-center">
                            </div>
                        </div>
                    </section>
                    <div className="container px-6 py-10 mx-auto">
                        <div className="lg:flex lg:items-center">

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
            <ButtonBanck />
        </>

    );
};

export default AccountPage