import React, { useEffect, useState } from 'react';
import { useAccountBalance } from '../../shared/hooks/useSaldo';

export const AccountSummary = () => {
    const { getAccount, isFetching, allAccount } = useAccountBalance();
    const [isLogged, setIsLogged] = useState( false );

    useEffect( () => {
        getAccount( isLogged );
    }, [isLogged] );

    if ( isFetching ) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="account-balance-container">
            {allAccount && allAccount.length > 0 ? (
                allAccount.map( ( account, index ) => (
                    <div key={index} className="account-details">
                        <h3>Cuenta Número: {account.accountNumber}</h3>
                        <p>Tipo de Cuenta: {account.accountType}</p>
                        <p>Saldo: {account.accountBalance}</p>
                        <h4>Últimos Movimientos:</h4>
                        <ul>
                            {account.movements.map( ( movement, i ) => (
                                <li key={i}>
                                    {movement.type} de {movement.amount} el {new Date( movement.createdAt ).toLocaleDateString()}
                                </li>
                            ) )}
                        </ul>
                    </div>
                ) )
            ) : (
                <div>No hay cuentas disponibles</div>
            )}
        </div>
    );
};