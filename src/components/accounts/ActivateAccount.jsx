import React, { useState } from 'react';
import { useActivedAccount } from '../../shared/hooks/useActivedAccount';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="noAccount"
                    value={form.noAccount}
                    onChange={handleChange}
                    placeholder="Número de cuenta"
                    required
                />
                <input
                    type="text"
                    name="dpi"
                    value={form.dpi}
                    onChange={handleChange}
                    placeholder="DPI"
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Activando...' : 'Activar cuenta'}
                </button>
            </form>
        </div>
    );
};