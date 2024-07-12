import { useState } from "react";
import toast from "react-hot-toast";
import { getNonApproved as getNonApprovedRequest } from "../../services";

export const useGetNonApproveLoans = () => {
    const [loans, setLoans] = useState(null)
    const [isFetching, setIsFetching] = useState(false);


    const getNonApproved = async () => {
        setIsFetching(true);
        try {
            const loansData = await getNonApprovedRequest();

                setLoans(loansData.data);

        } catch (error) {
            toast.error('Ocurrió un error al mostrar préstamos');
        } finally {
            setIsFetching(false);
        }
    };

    return {
        getNonApproved,
        isFetching,
        allLoans: loans || []
    };
};