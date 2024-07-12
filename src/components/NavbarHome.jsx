import React from 'react'
import { useUserDetails } from '../shared/hooks/useUserDetails'
// import useLocation and useHistory
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'

const NavButton = ( { text, id, onClickHandler } ) => {
    return (
        <span className="nav-button" id={id} onClick={() => onClickHandler( id )} style={{ color: 'white', cursor: 'pointer' }}>
            {text}
        </span >
    );
};
function NavbarHome () {
    const loc = useLocation()
    const navigate = useNavigate()

    const { isLogged, logout } = useUserDetails()

    const handleLogout = () => {
        logout()
    }

    const handleNav = ( id ) => {
        if ( id === 'depositsButton' ) {
            if ( loc.pathname === '/deposits' ) {
                toast.error( 'You are already on the Deposits page' )
            } else {
                navigate( '/deposits' )
            }
        } else {
            toast.error( 'Agreguen más botones' )
        }
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-5 w-[95%]">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://images.vexels.com/media/users/3/129288/isolated/preview/52e06e07244a3590366669665ea540e3-icono-de-circulo-de-banco-3.png" className="h-11" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BankGrupo5</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href={isLogged ? '/user' : '#'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inicio</a>
                        </li>

                        {!isLogged ? ( <li>
                            <a href="/auth" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                        </li> ) : (
                            <div>
                                <NavButton id='logoutButton' text="Logout" onClickHandler={handleLogout} />
                            </div>
                        )}

                        <li>
                            <a href={!isLogged ? '/register' : '#'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Toaster />
        </nav>
    )
}

export default NavbarHome