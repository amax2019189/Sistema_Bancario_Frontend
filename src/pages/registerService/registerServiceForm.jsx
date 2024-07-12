import React, { useState } from 'react';
import { InputService } from '../../components/imputService/imputService';
import { useRegisterService } from '../../shared/hooks/useRegisterService';
import toast from 'react-hot-toast'; 
import { registerService } from '../../services/api';


export const RegisterServiceForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        companyCode: '',
        companyName: '',
        password: '',
        numbercel: '',
        address: '',
        namwork: '',
        monthlyincome: '',
        accountType: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await registerService(formData);

            if (response.error) {
                setError(response.error.message || 'Error en el registro del servicio');
            } else {
                console.log(response); // Manejar la respuesta exitosa según lo necesites
                setError(null);
                // Aquí podrías redirigir a una página de éxito o hacer otra acción necesaria
            }
        } catch (error) {
            console.error('Error al registrar el servicio:', error);
            setError('Error al conectar con el servidor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Register Service Form</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />

                <label>Company Code:</label>
                <input type="text" name="companyCode" value={formData.companyCode} onChange={handleChange} required />

                <label>Company Name:</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Phone Number:</label>
                <input type="text" name="numbercel" value={formData.numbercel} onChange={handleChange} required />

                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                <label>Work Name:</label>
                <input type="text" name="namwork" value={formData.namwork} onChange={handleChange} required />

                <label>Monthly Income:</label>
                <input type="text" name="monthlyincome" value={formData.monthlyincome} onChange={handleChange} required />

                <label>Account Type:</label>
                <input type="text" name="accountType" value={formData.accountType} onChange={handleChange} required />

                <button type="submit" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar Servicio'}
                </button>
            </form>
        </div>
    );
};