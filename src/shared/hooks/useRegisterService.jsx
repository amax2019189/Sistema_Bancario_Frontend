import { useState } from 'react';
import { registerService as registerServiceRequest } from '../../services';
import toast from 'react-hot-toast';

export const useRegisterService = () => {
    const [isLoading, setIsLoading] = useState(false);

    const registerService = async (data) => {
        setIsLoading(true);
        try {
            // Remove roleUser from data before sending
            const { roleUser, ...requestData } = data;

            const response = await registerServiceRequest(requestData);
            setIsLoading(false);

            if (response.error) {
                toast.error(response.e?.response?.data || 'Ocurrió un error al registrar el servicio, intenta de nuevo.');
                return;
            }

            const { userDetails } = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            toast.success('Registro de servicio exitoso.');
        } catch (e) {
            setIsLoading(false);
            toast.error('Ocurrió un error al registrar el servicio, intenta de nuevo.');
        }
    };

    return { registerService, isLoading };
};