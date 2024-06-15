import { useState } from "react"
import { Input } from "../../components/input/Input"
import {
    validateEmail,
    emailValidationMessage,
    validatePassword,
    validatePasswordMessage,
    validateUsername,
    validateUsernameMessage,
    validateConfirPassword,
    passwordConfirmationMessage,
} from '../../shared/validators'
import { useRegister } from "../../shared/hooks/useRegister"
import { useNavigate } from 'react-router-dom'
export const Register = ( { switchAuthHandler } ) => {
    const { register, isLoading } = useRegister()
    const navigate = useNavigate();

    const [formState, setFormState] = useState( {
        username: {
            value: '',
            isValid: false,
            showError: false,
        },
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        },
        passwordConfir: {
            value: '',
            isValid: false,
            showError: false,
        },

    } )


    const handleInputValueChange = ( value, field ) => {
        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        } ) )
    }

    const handleInputValidationOnBlur = ( value, field ) => {
        let isValid = false
        switch ( field ) {
            case 'username':
                isValid = validateUsername( value )
                break
            case 'email':
                isValid = validateEmail( value )
                break
            case 'password':
                isValid = validatePassword( value )
                break
            case 'passwordConfir':
                isValid = validateConfirPassword( formState.password.value, value )
                break
            default:
                break
        }
        setFormState( ( prevState ) => ( {
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        } ) )
    }

    const handleRegister = async ( event ) => {
        event.preventDefault();

        try {
            await register(
                formState.email.value,
                formState.username.value,
                formState.password.value
            );
            navigate( '/auth' );
            switchAuthHandler();
        } catch ( error ) {

            console.error( "Error during registration:", error );
        }
    };

    const isSubmitButtonDisabled = isLoading ||
        !formState.username.isValid ||
        !formState.email.isValid ||
        !formState.password.isValid ||
        !formState.passwordConfir.isValid;

    return (
        // <div className="h-screen dark:bg-gray-900 flex justify-center items-center">
        //     <div className="lg:w-2/5 md:w-1/2 w-2/3">
        //         <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
        //             <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registrate</h1>
        //             <div>
        //                 <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">Usuario </label>
        //                 <input
        //                     className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        //                     type="text"
        //                     name="username"
        //                     id="username"
        //                     placeholder="Usuario"
        //                 />
        //             </div>
        //             <div>
        //                 <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
        //                 <input
        //                     className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        //                     type="text"
        //                     name="email"
        //                     id="email"
        //                     placeholder="@email"
        //                 />
        //             </div>
        //             <div>
        //                 <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Contrseña</label>
        //                 <input
        //                     className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        //                     type="text"
        //                     name="password"
        //                     id="password"
        //                     placeholder="Contraseña"
        //                 />
        //             </div>
        //             <div>
        //                 <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">Confirme su contraseñas</label>
        //                 <input
        //                     className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        //                     type="text"
        //                     name="confirm"
        //                     id="confirm"
        //                     placeholder="Confirma tu contraseña"
        //                 />
        //             </div>
        //             <br />
        //             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        //                 <a href="/">Register</a>
        //             </button>
        //             <br />
        //             <br />
        //             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        //                 <a href="/">Login</a>
        //             </button>
        //         </form>
        //     </div>
        // </div>
        <>
            <style>
                {`
              .register_img_section {
                background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),
                            url(https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center center;
              }
            `}
            </style>
            <div className="h-screen flex" id="containerRegister">
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div className="w-full px-8 md:px-32 lg:px-24">
                        <form className="bg-white rounded-md shadow-2xl p-5">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Register</h1>
                            <p className="text-sm font-normal text-gray-600 mb-8">Create a new account</p>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='username'

                                    value={formState.username.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='text'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.username.showError}
                                    validationMessage={validateUsernameMessage}
                                    placeholder={"Username"}
                                />                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='email'

                                    value={formState.email.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='email'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.email.showError}
                                    validationMessage={emailValidationMessage}
                                    placeholder={"Email"}
                                />                            </div><div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='password'

                                    value={formState.password.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='password'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.password.showError}
                                    validationMessage={validatePasswordMessage}
                                    placeholder={"Password"}
                                />                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='passwordConfir'
                                    value={formState.passwordConfir.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='password'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.passwordConfir.showError}
                                    validationMessage={passwordConfirmationMessage}
                                    placeholder={"ConfirmPassword"}
                                />                            </div>
                            <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                                onClick={handleRegister} disabled={isSubmitButtonDisabled}>Register</button>
                            <div className="flex justify-between mt-4">
                                <a href="/">
                                    <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Regresar a pagina principal</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden lg:flex w-full lg:w-1/2 register_img_section justify-around items-center">
                    <div className="bg-black opacity-20 inset-0 z-0" />
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <h1 className="text-white font-bold text-4xl font-sans">Registrate</h1>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a href="/auth" onClick={switchAuthHandler} className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </> )
}