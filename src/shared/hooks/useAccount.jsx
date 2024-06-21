import { useState, useEffect } from "react";
import { getAccountsUser } from "../../services/api"; // Asegúrate de crear esta función en tus servicios

const useAccounts = (token) => {
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (token) {
            fetchAccounts(token);
        }
    }, [token]);

    const fetchAccounts = async (token) => {
        setIsLoading(true);
        try {
            const response = await getAccountsUser(token);
            setIsLoading(false);

            if (response.error) {
                setError(response.error);
                return;
            }

            setAccounts(response.data); // Suponiendo que response.data es un array de cuentas
        } catch (error) {
            setIsLoading(false);
            setError(error.message || "Ocurrió un error al obtener las cuentas.");
        }
    };

    const refetchAccounts = () => {
        fetchAccounts(token); // Llamamos nuevamente a fetchAccounts para actualizar los datos
    };

    return {
        accounts,
        isLoading,
        error,
        refetchAccounts,
    };
};

export default useAccounts;
