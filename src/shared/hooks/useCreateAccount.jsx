import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createAccount as createAccountRequest } from "../../services";
import toast from "react-hot-toast";

export const useCreateAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const createAccount = async (dpiNumber, accountType) => {
        setIsLoading(true)
        try {
            const response = await createAccountRequest({
                dpiNumber, 
                accountType
            })

            console.log(response)
            setIsLoading(false)

            if (response.error) {
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al crear cuenta, intenta de nuevo')
            }

            navigate('/newAccounts');

        } catch (error) {
            setIsLoading(false);
            console.error('create account failed', error);
            toast.error('Ocurrió un error al crear cuenta, intenta de nuevo');
        }
    };

    return{
        isLoading,
        createAccount
    }
}
