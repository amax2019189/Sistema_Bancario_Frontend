import { useState } from "react";
import { accountbalance as getAccountBalanceRequest } from "../../services";
import toast from "react-hot-toast";

export const useAccountBalance = () => {
    const [account, setAccount] = useState(null);

    const getAccount = async () => {
        try {
            const accountData = await getAccountBalanceRequest();

            if (accountData.error) {
                toast.error(accountData.e?.response?.data || 'Ocurrió un error con el saldo de la cuenta');
            } else {
                setAccount(accountData.data.accountDetails);
            }
        } catch (error) {
            toast.error('Ocurrió un error al obtener los datos de la cuenta');
        }
    };

    return {
        getAccount,
        isFetching: account === null,
        allAccount: account || []
    };
};