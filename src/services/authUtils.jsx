
export const getToken = () => {
    return localStorage.getItem('token');
};

export const setToken = (token) => {
    localStorage.setItem('token', token); // Almacena el token en localStorage
};

export const removeToken = () => {
    localStorage.removeItem('token'); // Remueve el token de localStorage
};
