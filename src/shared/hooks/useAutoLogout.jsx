import { useEffect } from 'react';
import { logout } from './useLogout'; // Asegúrate de que la ruta sea correcta

const useAutoLogout = (timeout = 1200000) => { // 20000 ms = 20 seconds
    useEffect(() => {
        let logoutTimer;
        
        const resetLogoutTimer = () => {
            clearTimeout(logoutTimer);
            logoutTimer = setTimeout(() => {
                logout(); // Llama a la función logout que redirige a la HomePage
            }, timeout);
        };

        const activityEvents = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];

        const startListeners = () => {
            activityEvents.forEach(event => {
                window.addEventListener(event, resetLogoutTimer);
            });
        };

        const stopListeners = () => {
            activityEvents.forEach(event => {
                window.removeEventListener(event, resetLogoutTimer);
            });
        };

        startListeners(); // Iniciar los listeners al montar el componente
        resetLogoutTimer(); // Iniciar el temporizador al montar el componente

        return () => {
            clearTimeout(logoutTimer);
            stopListeners(); // Eliminar los listeners al desmontar el componente
        };
    }, [timeout]);
};

export default useAutoLogout;
