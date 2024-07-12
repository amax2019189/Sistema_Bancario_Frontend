import { useState } from "react";
import loanWithdrawal from './loanWithdrawalComponent'
import loanPayment from './loanPaymentComponent'
import { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import HeadPage from "../HeadPage";

export const loanParentComponent = () => {
    const [showLoanWithdrawal, setShowLoanWithdrawal] = useState( false );
    const [showLoanPayment, setShowLoanPayment] = useState( false );

    const toggleLoanWithdrawal = () => {
        setShowLoanWithdrawal( !showLoanWithdrawal );
        setShowLoanPayment( false ); // Ensure only one form is shown at a time
    };

    const toggleLoanPayment = () => {
        setShowLoanPayment( !showLoanPayment );
        setShowLoanWithdrawal( false ); // Ensure only one form is shown at a time
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
            <div className=" ml-80 p-none ">
                <HeadPage />
            </div>

            <div className=" w-auto flex items-center gap-7 ml-80 p-7 ">

                <div className="card bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full max-w-2xl">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1680792417523-156a3568162e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Loan"
                        className="w-20 h-20 object-cover rounded-full mx-auto"
                    />
                    <h1 className="text-center text-xl font-semibold text-gray-800">Loan Management</h1>
                    <div className="flex justify-center gap-5 mt-5">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={toggleLoanWithdrawal}
                        >
                            Withdraw Loan
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={toggleLoanPayment}
                        >
                            Pay Loan
                        </button>
                    </div>
                    {showLoanWithdrawal && <loanWithdrawal />}
                    {showLoanPayment && <loanPayment />}
                </div>
            </div>
        </>
    );
}