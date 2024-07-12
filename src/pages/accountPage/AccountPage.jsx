import AccountDetails from '../../components/account/account';
import NavbarHome from '../../components/NavbarHome';
import SectionA from '../homePage/SectionA';
import Navbar from '../../components/Navbar';
import React, { useEffect, useState } from "react";
import { DepositForm } from '../../components/deposits/DepositForm';
import { ReverseDepositForm } from '../../components/deposits/ReverseDepositForm';
import { ParentComponent } from '../../components/deposits/ParentDepositComponent';
import AccountSection from './AccountSection';
import ButtonBanck from '../../components/ButtonBanck';
import { useUserDetails } from '../../shared/hooks';
import useAutoLogout from '../../shared/hooks/useAutoLogout'; // Ajusta la ruta según tu estructura de proyecto
import Sidebar from '../../components/sidebar/Sidebar';

const NavButton = ({ text, id, onClickHandler }) => {
    return (
        <span className="nav-button" id={id} onClick={() => onClickHandler(id)} style={{ color: 'white', cursor: 'pointer' }}>
            {text}
        </span>
    );
};

const AccountPage = () => {
    const [userData, setUserData] = useState(null);
    const { isLogged, logout } = useUserDetails();

    const handleLogout = () => {
        logout();
    };

    useAutoLogout(); // Inicializa el hook para el auto logout

    useEffect(() => {
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
            <div id="body" className="bg-slate-50 h-screen flex">

                <div className="right w-full flex gap-2 flex-col ml-80">
                    <section className="bg-white">
                        <AccountSection />
                        <br />
                        <section className="">
                            <div className="container mx-auto mb-[-12%]">
                                <div className="flex justify-center"></div>
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

export default AccountPage;
