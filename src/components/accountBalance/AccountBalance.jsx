import React from "react";
import { useAccountBalance } from "../../shared/hooks/useSaldo";

export const AccountBalance = () => {
    const { accountDetails } = useAccountBalance();


    if (!accountDetails) {
        return <div>No se pudo obtener la información de la cuenta.</div>;
    }

    return (
        <div>
            <h2>Detalles de la Cuenta</h2>
            <p><strong>Número de Cuenta:</strong> {accountDetails.accountNumber}</p>
            <p><strong>Tipo de Cuenta:</strong> {accountDetails.accountType}</p>
            <p><strong>Saldo de la Cuenta:</strong> ${accountDetails.accountBalance}</p>
        </div>
    );
};