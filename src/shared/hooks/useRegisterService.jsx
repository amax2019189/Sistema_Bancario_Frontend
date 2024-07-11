import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService as registerServiceRequest } from "../../services";
import toast from "react-hot-toast";

export const useRegisterService = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const registerService = async (email, companyCode, companyName, username, numbercel, address, namwork, password, roleUser, monthlyincome, img, accountType) => {
        setIsLoading(true);

        const response = await registerServiceRequest({
            email,
            companyCode,
            companyName,
            username,
            numbercel,
            address,
            namwork,
            password,
            roleUser,
            monthlyincome,
            img,
            accountType
        });

        setIsLoading(false);

        if (response.error) {
            return toast.error(response.e?.response?.data || 'Ocurrió un error al registrarse, intenta de nuevo.');
        }

        const { userDetails } = response.data;

        localStorage.setItem('user', JSON.stringify(userDetails));

        navigate('/auth');
    };

    return {
        registerService,
        isLoading
    };
};
