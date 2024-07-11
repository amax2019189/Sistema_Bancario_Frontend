import { useState } from "react";
import toast from "react-hot-toast";
import { paidServices as getPaidServiceRequest } from "../../services/api";

export const usePaidServices = () => {
const [ services, setServices ] = useState([])

const getServices = async (isLogged = false) =>{
    const servicesData = await getPaidServiceRequest()

    if(servicesData.error){
        return toast.error(
            servicesData.e?.response?.data || 'Ocurrio un error al mostrar servicios pagados'
        )
    }

    if(isLogged){
        return setServices({
            services:servicesData.data.services
        })
    }
    setServices({
        services: servicesData.data.services
    })
}

  return {
    getServices,
    isFetching: !Boolean(services),
    allServices: services?.services
  }
}
