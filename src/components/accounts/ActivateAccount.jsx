import React, { useState } from 'react';
import { useActivedAccount } from '../../shared/hooks/useActivedAccount';
import { DeactivateAccount } from './DesactivatedAccount';

export const ActivateAccount = () => {
    const { activedAccount, isLoading } = useActivedAccount();
    const [form, setForm] = useState({ noAccount: '', dpi: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { noAccount, dpi } = form;
        activedAccount(noAccount, dpi);
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 gap-[5rem] ml-[-5rem] ">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Activar Cuenta</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="noAccount" className="block text-gray-700 font-semibold mb-2">Número de cuenta</label>
                        <input
                            type="text"
                            id="noAccount"
                            name="noAccount"
                            value={form.noAccount}
                            onChange={handleChange}
                            placeholder="Número de cuenta"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="dpi" className="block text-gray-700 font-semibold mb-2">DPI</label>
                        <input
                            type="text"
                            id="dpi"
                            name="dpi"
                            value={form.dpi}
                            onChange={handleChange}
                            placeholder="DPI"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        {isLoading ? 'Activando...' : 'Activar cuenta'}
                    </button>
                </form>
            </div>
            <DeactivateAccount />
        </div>
    );
};