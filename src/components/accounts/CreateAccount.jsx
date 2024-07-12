import React, { useState } from 'react';
import { useCreateAccount } from '../../shared/hooks/useCreateAccount';
import toast from 'react-hot-toast';

export const CreateAccountForm = () => {
    const [dpiNumber, setDpiNumber] = useState('');
    const [accountType, setAccountType] = useState('');
    const { isLoading, createAccount } = useCreateAccount();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!dpiNumber || !accountType) {
            return toast.error('Todos los campos son obligatorios');
        }

        await createAccount(dpiNumber, accountType);
    };

    return (
        <div className="create-account-form">
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>DPI Number:</label>
                    <input
                        type="text"
                        value={dpiNumber}
                        onChange={(e) => setDpiNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Account Type:</label>
                    <select
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                        required
                    >
                        <option value="">Selecciona un tipo de cuenta</option>
                        <option value="savings">Ahorros</option>
                        <option value="checking">Monetaria</option>
                        {/* Agregar más tipos de cuenta según sea necesario */}
                    </select>
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Creando...' : 'Crear Cuenta'}
                </button>
            </form>
        </div>
    );
};