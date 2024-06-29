
export const getToken = () => {
    const userDetails = JSON.parse(localStorage.getItem('user'));
    return userDetails?.token || null; // Devuelve solo el atributo 'token' del objeto userDetails
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