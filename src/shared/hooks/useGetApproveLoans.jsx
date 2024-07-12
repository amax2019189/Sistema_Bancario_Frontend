import { useState } from "react";
import toast from "react-hot-toast";
import { getApproved as getApprovedRequest } from "../../services";

export const useGetApproveLoans = () => {
    const [loans, setLoans] = useState([])

    const getApproved = async (isLogged = false) => {
        const loansData = await getApprovedRequest()

        if (servicesData.error) {
            return toast.error(
                servicesData.e?.response?.data || 'Ocurrio un error al mostrar prestamos'
            )
        }

        if(isLogged){
            return setLoans({
                loans:loansData.data.approvedLoans
            })
        }
        setLoans({
            loans:loansData.data.approvedLoans
        })

    }

    return{
        getApproved,
        isFetching: !Boolean(loans),
        allLoans: loans?.approvedLoans
    }

}
