import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { approveLoan as approveLoanRequest } from "../../services";

export const useApproveLoan = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const approveLoan = async (withdrawCode, state) => {
        setIsLoading(true)
        try {
            const response = await approveLoanRequest({
                withdrawCode,
                state
            })

            console.log(response)
            setIsLoading(false)

            if (response.error) {
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al aprovar un prestamo, intenta de nuevo')
            }

            navigate('/user')

        } catch (error) {
            setIsLoading(false);
            console.error('aproved loan failed', error);
            toast.error('Ocurrió un error al aprovar prestamo, intenta de nuevo');
        }
    }

    return {
        approveLoan,
        isLoading
    }

}

