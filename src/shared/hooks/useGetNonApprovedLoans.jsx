import { useState } from "react";
import toast from "react-hot-toast";
import { getNonApproved as getNonApprovedRequest } from "../../services";

export const useGetNonApproveLoans = () => {
    const [loans, setLoans] = useState([])

    const getNonApproved = async (isLogged = false) => {
        const loansData = await getNonApprovedRequest()

        if (servicesData.error) {
            return toast.error(
                servicesData.e?.response?.data || 'Ocurrio un error al mostrar prestamos'
            )
        }

        if(isLogged){
            return setLoans({
                loans:loansData.data.nonApprovedLoans
            })
        }
        setLoans({
            loans:loansData.data.nonApprovedLoans
        })

    }

    return{
        getNonApproved,
        isFetching: !Boolean(loans),
        allLoans: loans?.nonApprovedLoans
    }

}