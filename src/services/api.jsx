import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/sistemaBancario/v1',
    timeout: 2000
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');

        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);

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

export const makeDeposit = async (data) => {
    try {
        return await apiClient.post('/deposit/makeDeposit', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const editDeposit = async (data) => {
    try {
        return await apiClient.put('/deposit/editDeposit', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const reverseDeposit = async (data) => {
    try {
        return await apiClient.delete('/deposit/reverseDeposit', { data });
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const registerService = async (data) => {
    try {
        return await apiClient.post('/service/register', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const paymentService = async (data) => {
    try {
        return await apiClient.post('/service/pay', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const paidServices = async () => {
    try {
        return await apiClient.get('/service/paid')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


