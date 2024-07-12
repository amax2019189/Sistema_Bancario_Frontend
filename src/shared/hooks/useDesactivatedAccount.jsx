import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAccount as deleteAccountRequest } from "../../services";
import toast from "react-hot-toast";

export const useActivedAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const activedAccount = async (noAccount, dpi) => {
        setIsLoading(true)
        try {
            const response = await deleteAccountRequest({
                noAccount, 
                dpi
            })

            console.log(response)
            setIsLoading(false)

            if (response.error) {
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al desactivar cuenta, intenta de nuevo')
            }

            navigate('/newAccounts');

        } catch (error) {
            setIsLoading(false);
            console.error('desactived account failed', error);
            toast.error('Ocurrió un error al desactivar cuenta, intenta de nuevo');
        }
    };

    return{
        activedAccount,
        isLoading
    }
}