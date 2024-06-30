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
        const data = { dpiNumber, accountType };

        // Log the data being sent to the API
        console.log('Datos enviados a la API para crear cuenta:', data);

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
export const deactivateAccount = async (noAccount, token) => {
    try {
        const data = { noAccount };
        return await apiClient.delete('/account/deleteAccount', {
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
export const activateAccount = async (noAccount, token) => {
    try {
        const data = { noAccount };
        return await apiClient.put('/account/activateAccount', data, {
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
