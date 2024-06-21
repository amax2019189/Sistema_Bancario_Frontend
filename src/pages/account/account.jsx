import React, { useState } from 'react';
import useAccounts from '../../shared/hooks/useAccount'; 
import { getToken } from '../../services/authUtils'; 
import { createAccount } from '../../services/api'; 

const AccountsPage = () => {
    const _token = localStorage.getItem('user'); 

    const { accounts, isLoading, error, refetchAccounts } = useAccounts(_token);

    const [formData, setFormData] = useState({
        dpiNumber: '', // Añadido DPI
        accountType: '',
    });

    const { dpiNumber, accountType } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            

            await createAccount(formData);
            // Después de crear la cuenta, refresca la lista de cuentas
            refetchAccounts();
            // Limpia el formulario
            setFormData({
                dpiNumber: '',
                accountType: '',
            });
        } catch (error) {
            console.error('Error al crear la cuenta:', error);
        }
    };

    if (isLoading) {
        return ( <p>Cargando cuentas...</p>)
    }

    return (
        <div>
            <h2>Mis Cuentas</h2>
            {accounts.length === 0 ? (
                <p>No hay cuentas disponibles.</p>
            ) : (
                <ul>
                    {accounts.map((account) => (
                        <li key={account._id}>
                            <p>Correo asociado: {account.email}</p> {/* Ajusta según la estructura de tu cuenta */}
                            <p>Tipo de cuenta: {account.accountType}</p> {/* Ajusta según la estructura de tu cuenta */}
                            <p>Estado de cuenta: {account.state}</p> {/* Ajusta según la estructura de tu cuenta */}
                            {/* Otros detalles de cuenta */}
                        </li>
                    ))}
                </ul>
            )}

            <h2>Crear Nueva Cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="dpiNumber">DPI</label> {/* Nuevo campo DPI */}
                    <input
                        type="text"
                        id="dpiNumber"
                        name="dpiNumber"
                        value={dpiNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="accountType">Tipo de Cuenta</label>
                    <input
                        type="text"
                        id="accountType"
                        name="accountType"
                        value={accountType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Crear Cuenta</button>
            </form>
        </div>
    );
};

export default AccountsPage;
