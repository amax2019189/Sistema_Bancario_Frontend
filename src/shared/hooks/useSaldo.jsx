import { useState, useEffect } from "react";
import { accountbalance as getAccountBalanceRequest } from "../../services";
import toast from "react-hot-toast";

export const useAccountBalance = () => {
    const [account, setAccount] = useState( null );
    const [isFetching, setIsFetching] = useState( true );

    const getAccount = async ( isLogged = false ) => {
        setIsFetching( true );

        const accountData = await getAccountBalanceRequest();

        if ( accountData.error ) {
            toast.error(
                accountData.e?.response?.data || 'Ocurrió un error con el saldo de la cuenta'
            );
            setIsFetching( false );
            return;
        }

        if ( isLogged ) {
            setAccount( accountData.data.accountDetails );
        } else {
            setAccount( accountData.data.accountDetails );
        }

        setIsFetching( false );
    };

    useEffect( () => {
        getAccount();
    }, [] );

    return {
        getAccount,
        isFetching,
        accountDetails: account,
    };
}