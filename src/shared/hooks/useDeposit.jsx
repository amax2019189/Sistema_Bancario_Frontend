import { useState } from 'react';
import { makeDeposit, editDeposit, reverseDeposit } from '../../services/';
import { validateAccountNumber, accountNumberValidationMessage, validateOperationNumber, operationNumberValidationMessage } from '../validators/';

export const useDeposit = () => {
    const [depositData, setDepositData] = useState( {
        accountNumber: '',
        amount: '',
        description: '',
        exchangeRate: 'quetzales', // default value
    } );
    const [error, setError] = useState( {} );
    const [loading, setLoading] = useState( false );
    const [success, setSuccess] = useState( false );

    const handleInputChange = ( value, field ) => {
        setDepositData( ( prevState ) => ( {
            ...prevState,
            [field]: value,
        } ) );
    };

    const handleInputBlur = ( value, field ) => {
        if ( field === 'accountNumber' && !validateAccountNumber( value ) ) {
            setError( ( prevState ) => ( {
                ...prevState,
                [field]: accountNumberValidationMessage,
            } ) );
        } else {
            setError( ( prevState ) => ( {
                ...prevState,
                [field]: '',
            } ) );
        }
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        setError( {} );
        setSuccess( false );

        const { accountNumber, amount, description, exchangeRate } = depositData;

        if ( !validateAccountNumber( accountNumber ) ) {
            setError( ( prevState ) => ( {
                ...prevState,
                accountNumber: accountNumberValidationMessage,
            } ) );
            return;
        }

        if ( amount <= 0 ) {
            setError( ( prevState ) => ( {
                ...prevState,
                amount: 'El monto debe ser mayor que cero',
            } ) );
            return;
        }

        const depositPayload = {
            accountNumberDestino: accountNumber,
            amount: parseFloat( amount ),
            description,
            exchangeRate,
        };

        setLoading( true );

        const response = await makeDeposit( depositPayload );

        setLoading( false );

        if ( response.error ) {
            setError( ( prevState ) => ( {
                ...prevState,
                form: 'Error al realizar el depósito',
            } ) );
        } else {
            setSuccess( true );
        }


    };

    const handleEditSubmit = async ( e ) => {
        e.preventDefault();
        setError( {} );
        setSuccess( false );

        const { operationNumber, amount, description } = depositData;

        if ( !validateOperationNumber( operationNumber ) ) {
            setError( ( prevState ) => ( {
                ...prevState,
                operationNumber: operationNumberValidationMessage,
            } ) );
            return;
        }

        if ( amount <= 0 ) {
            setError( ( prevState ) => ( {
                ...prevState,
                amount: 'El monto debe ser mayor que cero',
            } ) );
            return;
        }

        const editPayload = {
            operationNumber,
            amount: parseFloat( amount ),
            description,
        };

        setLoading( true );

        const response = await editDeposit( editPayload );

        setLoading( false );

        if ( response.error ) {
            setError( ( prevState ) => ( {
                ...prevState,
                form: 'Error al editar el depósito',
            } ) );
        } else {
            setSuccess( true );
        }
    };

    const handleReverseSubmit = async ( e ) => {
        e.preventDefault();
        setError( {} );
        setSuccess( false );

        const { operationNumber } = depositData;

        if ( !validateOperationNumber( operationNumber ) ) {
            setError( prevState => ( {
                ...prevState,
                operationNumber: operationNumberValidationMessage,
            } ) );
            return;
        }

        const reversePayload = {
            operationNumber,
        };

        setLoading( true );

        try {
            console.log( 'Sending reverse deposit request with payload:', reversePayload );
            const response = await reverseDeposit( reversePayload );

            if ( response.error ) {
                setError( prevState => ( {
                    ...prevState,
                    form: 'Error al revertir el depósito',
                } ) );
            } else {
                setSuccess( true );
            }
        } catch ( error ) {
            console.error( 'Error reversing deposit:', error.message );
            setError( prevState => ( {
                ...prevState,
                form: 'Error al revertir el depósito',
            } ) );
        } finally {
            setLoading( false );
        }
    };

    return {
        depositData,
        error,
        loading,
        success,
        handleInputChange,
        handleInputBlur,
        handleSubmit,
        handleEditSubmit,
        handleReverseSubmit
    };
};
