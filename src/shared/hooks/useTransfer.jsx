import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeTransfer as transferRequest } from "../../services";
import toast from "react-hot-toast";

export const useTransfer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const trasnfer = async (accountNumberOrigen, accountNumberDestino, amount, description, saveAsFavorite, alias) => {
    setIsLoading(true)
    try {
      const response = await transferRequest({
        accountNumberOrigen,
        accountNumberDestino,
        amount,
        description,
        saveAsFavorite,
        alias
      })

      console.log(response)
      setIsLoading(false)

      if (response.error) {
        console.log(response.error);
        return toast.error(response.e?.response?.data || 'Ocurrió un error al pagar el servicio, intenta de nuevo')
      }

      navigate('/user');

    } catch (error) {
      setIsLoading(false);
      console.error('tranfer services failed', error);
      toast.error('Ocurrió un error al transfer, intenta de nuevo');
    }
  }

  return{
    trasnfer,
    isLoading
  }
}
