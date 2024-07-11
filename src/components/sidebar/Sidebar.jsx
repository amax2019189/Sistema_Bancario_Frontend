import { useState } from "react";
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import { useEffect } from "react";


const NavButton = ( { text, id, onClickHandler, className } ) => {
    return (
        <span className={className} id={id} onClick={() => onClickHandler( id )} style={{ color: 'white', cursor: 'pointer' }}>
            {text}
        </span >
    );
};

function Sidebar () {
    const [userData, setUserData] = useState( null );
    const { isLogged, logout } = useUserDetails();

    const handleLogout = () => {
        logout();
    };

    useEffect( () => {
        // Function to obtain user data from localStorage
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
        <nav className="bg-gray-900 w-80 h-screen flex flex-col gap-10 border-r border-none fixed">
            <div className="logo text-2xl font-bold text-center h-16 flex items-center justify-center mt-[3rem] text-red-50">
                HOLA
            </div>
            {userData ? (
                <div className="user flex items-center justify-center flex-col gap-4 border-none border-emerald-slate-50 ">
                    <img
                        className="w-24 rounded-full shadow-xl"
                        src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                        alt="User Avatar"
                    />
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg text-emerald-700 text-[28px] uppercase">
                            {userData.name}
                        </span>
                        <span className="text-white text-[20px]">{userData.email}</span>
                        <span className="font-semibold text-slate-500">
                            {userData.rolerUser}{" "}
                        </span>
                    </div>
                    <div className="text-sm text-white"></div>
                </div>
            ) : (
                <p>Error al iniciar sesion de usuario...</p>
            )}
            <div className="bg-cyan-600 w-full h-full ">
                <ul className="px-[4rem] space-y-6  rounded-lg mt-[3rem]">
                    <li>
                        <a
                            className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg"
                            href={"/user"}
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg"
                            href={"/MyAccount"}
                        >
                            Mi cuenta
                        </a>
                    </li>
                    <li>
                        <a
                            className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg"
                            href={"/deposits"}
                        >
                            Depositos
                        </a>
                    </li>
                    <li>
                        <a
                            className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg"
                            href={"/transfer"}
                        >
                            Transferencias
                        </a>
                    </li>
                    <li>
                        <a
                            className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg"
                            href={"conversor"}
                        >
                            Conversor de divisas
                        </a>
                    </li>
                    <li>
                        <a
                            className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg"
                            href="#"
                        >
                            Contact
                        </a>
                    </li>
                    {!isLogged ? ( <li>
                        <a href="/auth" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                    </li> ) : (
                        <div>
                            <NavButton className="block px-4 py-2.5 text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" id='logoutButton' text="Logout" onClickHandler={handleLogout} />
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar