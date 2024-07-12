import { useState } from "react";
import { withdrawLoan as withdrawLoanApi, payLoan as payLoanApi } from "../../services/api";

const useLoan = () => {
    const [loading, setLoading] = useState( false );
    const [error, setError] = useState( null );
    const [message, setMessage] = useState( null );

    const withdrawLoan = async ( data ) => {
        setLoading( true );
        setError( null );
        setMessage( null );

        try {
            const response = await withdrawLoanApi( data );
            if ( response.error ) {
                throw new Error( response.e.response?.data || 'Error while withdrawing loan' );
            }
            setMessage( 'Monto del préstamo retirado exitosamente' );
        } catch ( error ) {
            setError( error.message );
        } finally {
            setLoading( false );
        }
    };

    const payLoan = async ( data ) => {
        setLoading( true );
        setError( null );
        setMessage( null );

        try {
            const response = await payLoanApi( data );
            if ( response.error ) {
                throw new Error( response.e.response?.data || 'Error while paying loan' );
            }
            setMessage( 'Pago del préstamo realizado exitosamente' );
        } catch ( error ) {
            setError( error.message );
        } finally {
            setLoading( false );
        }
    };

    return { withdrawLoan, payLoan, loading, error, message };
};

export default useLoan;

