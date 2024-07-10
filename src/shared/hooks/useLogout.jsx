import { useEffect } from 'react';
import { logout } from './useLogout'; // Asegúrate de que la ruta sea correcta

const useAutoLogout = (timeout = 1200000) => { // 1200000 ms = 20 minutes
    useEffect(() => {
        let logoutTimer;
        
        const resetLogoutTimer = () => {
            clearTimeout(logoutTimer);
            logoutTimer = setTimeout(() => {
                logout(); // Llama a la función logout que redirige a la HomePage
            }, timeout);
        };

        const activityEvents = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];

        activityEvents.forEach(event => {
            window.addEventListener(event, resetLogoutTimer);
        });

        resetLogoutTimer(); // Iniciar el temporizador al montar el componente

        return () => {
            clearTimeout(logoutTimer);
            activityEvents.forEach(event => {
                window.removeEventListener(event, resetLogoutTimer);
            });
        };
    }, [timeout]);
};

export default useAutoLogout;
