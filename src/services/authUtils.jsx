
export const getToken = () => {
    return localStorage.getItem('token');
};

export const setToken = (token) => {
    localStorage.setItem('token', token); // Almacena el token en localStorage
};

export const removeToken = () => {
    localStorage.removeItem('token'); // Remueve el token de localStorage
};

export const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.role || null; // Devuelve el rol del usuario o null si no existe
  };