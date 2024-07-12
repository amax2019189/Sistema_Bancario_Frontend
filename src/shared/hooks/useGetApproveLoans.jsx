import { useState } from "react";
import toast from "react-hot-toast";
import { getApproved as getApprovedRequest } from "../../services";

export const useGetApproveLoans = () => {
    const [loans, setLoans] = useState(null);

    const getApproved = async () => {
        try {
            const loansData = await getApprovedRequest();
            if (loansData.error) {
                toast.error(loansData.e?.response?.data || 'Ocurrió un error al mostrar préstamos');
            } else {
                setLoans(loansData.data);
            }
        } catch (error) {
            toast.error('Ocurrió un error al mostrar préstamos');
        }
    };

    return {
        getApproved,
        isFetching: loans === null,
        allLoans: loans || []
    };
};
