import React, { useState } from 'react';
import { InputService } from '../../components/imputService/imputService';
import { useRegisterService } from '../../shared/hooks/useRegisterService';

export const RegisterServiceForm = () => {
    const { registerService, isLoading } = useRegisterService();
    const [formData, setFormData] = useState({
        email: '',
        companyCode: '',
        companyName: '',
        username: '',
        numbercel: '',
        address: '',
        namwork: '',
        password: '',
        roleUser: '',
        monthlyincome: '',
        accountType: ''
    });

    const handleChange = (value, field) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleBlur = (value, field) => {
        // Puede añadir lógica de validación aquí si es necesario
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerService(
            formData.email,
            formData.companyCode,
            formData.companyName,
            formData.username,
            formData.numbercel,
            formData.address,
            formData.namwork,
            formData.password,
            formData.roleUser,
            formData.monthlyincome,
            formData.accountType
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputService
                field="email"
                label="Email"
                value={formData.email}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="email"
                placeholder="Enter your email"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="companyCode"
                label="Company Code"
                value={formData.companyCode}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your company code"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="companyName"
                label="Company Name"
                value={formData.companyName}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your company name"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="username"
                label="Username"
                value={formData.username}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your username"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="numbercel"
                label="Cell Number"
                value={formData.numbercel}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your cell number"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="address"
                label="Address"
                value={formData.address}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your address"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="namwork"
                label="Work Name"
                value={formData.namwork}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your work name"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="password"
                label="Password"
                value={formData.password}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="password"
                placeholder="Enter your password"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="roleUser"
                label="Role User"
                value={formData.roleUser}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your role"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="monthlyincome"
                label="Monthly Income"
                value={formData.monthlyincome}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your monthly income"
                showErrorMessage={false}
                validationMessage=""
            />
            <InputService
                field="accountType"
                label="Account Type"
                value={formData.accountType}
                onChangeHandler={handleChange}
                onBlurHandler={handleBlur}
                type="text"
                placeholder="Enter your account type"
                showErrorMessage={false}
                validationMessage=""
            />
            <button type="submit" disabled={isLoading}>Register Service</button>
        </form>
    );
};

