import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paymentService as payServiceRequest } from "../../services";
import toast from "react-hot-toast";

export const usePayServices = () => {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const payService = async(accountNumberOrigen, accountNumberDestino, amount, description, serviceType) => {
        setIsLoading(true)
        try {
            const response = await payServiceRequest({
                accountNumberOrigen, 
                accountNumberDestino,
                amount, 
                description, 
                serviceType
            })

            setIsLoading(false)

            if(response.error){
                console.log(response.error);
                return toast.error(response.e?.response?.data || 'Ocurrió un error al pagar el servicio, intenta de nuevo')
            }

            navigate('/services');
            window.location.reload();

        } catch (error) {
            setIsLoading(false);
            console.error('pay services failed', error);
            toast.error('Ocurrió un error al pagar servicio, intenta de nuevo');
        }
    };

    return{
        payService,
        isLoading
    }

}
