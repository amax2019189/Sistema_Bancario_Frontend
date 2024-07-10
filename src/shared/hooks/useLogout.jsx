export const logout = () => {
    localStorage.removeItem('user');
    window.location.href = '/home'; // Redirigir a la HomePage
};
