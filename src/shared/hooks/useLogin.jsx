import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);

        try {
            const response = await loginRequest({
                email,
                password,
            });

            setIsLoading(false);

            console.log("Response from login:", response); // Verificar la respuesta del servidor

            if (response.error) {
                console.error("Error during login:", response.error);
                return toast.error(
                    response.error.message ||
                        "Ocurrió un error al iniciar sesión, intenta de nuevo."
                );
            }

            const { userDetails, token } = response.data;

            console.log("User details:", userDetails); // Verificar los userDetails recibidos

            // Aquí se almacenan los datos del usuario y el token en localStorage
            localStorage.setItem("user", JSON.stringify(userDetails));
            localStorage.setItem("token", token);

            // Navegar a la página principal después del inicio de sesión exitoso
            navigate("/");

        } catch (error) {
            setIsLoading(false);
            console.error("Error during login:", error);
            toast.error(
                "Ocurrió un error al iniciar sesión, intenta de nuevo."
            );
        }
    };

    console.log(localStorage.getItem(userDetails))

    return {
        login,
        isLoading,
    };
};
