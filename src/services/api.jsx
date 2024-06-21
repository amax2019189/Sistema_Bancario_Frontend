import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/sistemaBancario/v1',
    timeout: 2000
});

// Función para manejar el inicio de sesión
export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

// Función para manejar el registro de usuario
export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

// Función para obtener los detalles de la cuenta por ID de usuario
export const getAccountDetails = async (userId, token) => {
    try {
        return await apiClient.get(`/account/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

// Función para obtener las cuentas del usuario logueado
export const getAccountsUser = async (token) => {
    try {
        return await apiClient.get('/account/myAccount', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

// Función para crear una nueva cuenta
export const createAccount = async (dpiNumber, accountType, token) => {
    try {

        console.log({"fromCreateAccount":token});
        
        const data = { dpiNumber, accountType };
        return await apiClient.post('/account/createAccount', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

// Función para desactivar una cuenta
export const deactivateAccount = async (noAccount, dpi, token) => {
    try {
        const data = { noAccount, dpi };
        return await apiClient.delete('/accounts/deleteAccount', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data
        });
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

// Función para activar una cuenta
export const activateAccount = async (noAccount, dpi, token) => {
    try {
        const data = { noAccount, dpi };
        return await apiClient.put('/accounts/activateAccount', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};
