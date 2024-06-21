<<<<<<< HEAD
import { useState } from "react";
import { Input } from '../../components/input/Input';
import { useNavigate } from "react-router-dom";
import {
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    validatePassword,
} from '../../shared/validators';
import { useLogin } from '../../shared/hooks/useLogin';

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await login(formState.email.value, formState.password.value);
            navigate('/');

        } catch (e) {
            console.error('Error during login: ', e);
        }

    };

    const isSubmitButtonDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

    return (
        <>
            <style>
                {`
              .login_img_section {
                background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),
                            url(https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center center;
              }
            `}
            </style>
            <div className="h-screen flex bg-gray-200 h-screen flex justify-center" id="conteinerLog">
                <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
                    <div className="bg-black opacity-20 inset-0 z-0" />

                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <h1 className="text-white font-bold text-4xl font-sans">Inicia sesión</h1>
                        <p className="text-white mt-1">Sistema Crediticio</p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a href="/login" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Regresar a inicio</a>
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div className="w-full px-8 md:px-32 lg:px-24">
                        <form className="bg-white rounded-md shadow-2xl p-5">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hola Cliente!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-8">Bienvenido</p>
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <Input
                                    field='email'
                                    value={formState.email.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='text'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.email.showError}
                                    validationMessage={emailValidationMessage}
                                    placeholder={"Email"}
                                />
                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    field='password'
                                    value={formState.password.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='password'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.password.showError}
                                    validationMessage={validatePasswordMessage}
                                    placeholder={"Contraseña"}
                                />
                            </div>
                            <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                                onClick={handleLogin} disabled={isSubmitButtonDisabled} id="signUp">Login</button>
                            <div className="flex justify-between mt-4">
                                <button id="signIn" onClick={switchAuthHandler}>
                                    <a href="/register" className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:translate-x-5">¿No tienes una cuenta? Haz click aquí</a>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
=======
const Login = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Sistema bancario</h2>
                            <p className="max-w-xl mt-3 text-gray-300">
                                ¡Bienvenido a nuestro sistema bancario de confianza! Nos complace tenerlo con nosotros y estamos comprometidos a brindarle un servicio excepcional.
                                Su seguridad y satisfacción son nuestra prioridad, y estamos aquí para ayudarlo a alcanzar sus metas financieras con eficiencia y tranquilidad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Grupo5-Login</h2>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Registrate en nuestro sistema bancario</p>
                        </div>
                        <div className="mt-8">
                            <form>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Mi correo"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        {/*<a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>*/}                                    </div>

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Mi contraseña"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Login
                                    </button>
                                </div>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">No tienes cuenta aun? <a href={"/register"} className="text-blue-500 focus:outline-none focus:underline hover:underline">Registrate!</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login
>>>>>>> 91fd46b7f09e2c9ed2cd5c442645b5620a4c3c63
