import { useState, useEffect } from "react";
import { accountbalance as getAccountBalanceRequest } from "../../services";
import toast from "react-hot-toast";

export const useAccountBalance = () => {
    const [account, setAccount] = useState(null);

    const getAccount = async () => {
        try {
            const accountData = await getAccountBalanceRequest();
            console.log('Datos de la cuenta desde la API:', accountData); // Agregar esto

                setAccount(accountData.data);
                console.log('este el el else:',account)

        } catch (error) {
            console.error('Error al obtener los datos de la cuenta:', error); // Agregar esto
            return toast.error('Ocurrió un error al obtener los datos de la cuenta');
             
        }
    };

    return {
        getAccount,
        isFetching: account === null,
        allAccount: account || []
    };
};