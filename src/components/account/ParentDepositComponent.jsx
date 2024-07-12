import React, { useState, useEffect } from "react";
import { DepositForm } from "./DepositForm";
import { EditDepositForm } from "./EditDepositForm";
import { ReverseDepositForm } from "./ReverseDepositForm";
import { AccountDetails } from "./AccountDetails";

export const ParentComponent = () => {
    const [showDepositForm, setShowDepositForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showReverseForm, setShowReverseForm] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Simular la carga de cuentas desde una API
        const fetchAccounts = async () => {
            // Reemplazar esto con una llamada real a tu API
            const mockAccounts = [
                { id: 1, accountNumber: '1234567890', status: 'Activa', balance: 1000, movements: [] },
                { id: 2, accountNumber: '0987654321', status: 'Activa', balance: 2000, movements: [] },
            ];
            setAccounts(mockAccounts);
        };

        fetchAccounts();
        //hola
    }, []);

    const handleAccountClick = (account) => {
        setSelectedAccount(account);
    };


    return (
        <>
            {/* ... (código existente del navbar) */}
            <div className="right w-full flex gap-2 flex-col ml-80">
                <div className="accounts-list">
                    <h2>Mis Cuentas</h2>
                    <ul>
                        {accounts.map(account => (
                            <li key={account.id} onClick={() => handleAccountClick(account)}>
                                Cuenta: {account.accountNumber}
                            </li>
                        ))}
                    </ul>
                </div>

                {selectedAccount && <AccountDetails account={selectedAccount} />}

                {/* ... (botones y formularios existentes) */}
            </div>
        </>
    );
};