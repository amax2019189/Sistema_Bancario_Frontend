import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paymentService as payServiceRequest } from "../../services";
import toast from "react-hot-toast";

import React from 'react'

export const usePayServices = () => {

    const [isLoading, setIsLoading] = useState( false )

    const navigate = useNavigate()
    const payService = async( accountNumberOrigen, accountNumberDestino, amount, description, serviceType ) => {
        setIsLoading(true);

        const response = await payServiceRequest({accountNumberOrigen, accountNumberDestino, amount, description, serviceType})
        setIsLoading(false)

        if ( response.error ) {
            return toast.error( response.e?.response?.data ) || 'Ocurrió un error al registrarse, intenta de nuevo.'
        }

        const { userDetails } = response.data


    }
  return {

  }
}
