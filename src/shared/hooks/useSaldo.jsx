import { useState } from "react";
import { accountbalance as getAccountBalanceRequest } from "../../services";
import toast from "react-hot-toast";

export const useAccountBalance = () => {
    const [account, setAccount] = useState([])

    const getAccount = async (isLogged = false) => {
        
        const accountData = await getAccountBalanceRequest()
        
        if(accountData.error){
            return toast.error(
                accountData.e?.response?.data || 'Occurrio un error con el Saldo de la ccuenta'
            )
        }

        if(isLogged){
            return setAccount({
                account:accountData.data.accountDetails
            })
        }

        setAccount({
            account: accountData.data.accountDetails
        })
    }

    return {
        getAccount,
        isFetching: !Boolean(account),
        allAccount: account?.account
    }
}