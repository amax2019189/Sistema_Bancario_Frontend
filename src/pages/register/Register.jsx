
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
    validateLastName,
    lastNameValidationMessage,
    validateName,
    validateDPI,
    dpiValidationMessage,
    validateNumberCel,
    numberValidationMessage,
    nameValidationMessage
} from '../../shared/validators'
import { useRegister } from "../../shared/hooks/useRegister"
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/Navbar"
export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister()
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: {
            value: '',
            isValid: false,
            showError: false,
        },
        lastName: {
            value: '',
            isValid: false,
            showError: false,
        },
        dpi: {
            value: '',
            isValid: false,
            showError: false,
        },
        numbercel: {
            value: '',
            isValid: false,
            showError: false,
        },
        address: {
            value: '',
            isValid: false,
            showError: false
        },
        namework: {
            value: '',
            isValid: false,
            showError: false
        },
        monthlyincome: {
            value: '',
            isValid: false,
            showError: false
        },
        username: {
            value: '',
            isValid: false,
            showError: false
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

    })


    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break
            case 'name':
                isValid = validateName(value)
                break
            case 'lastName':
                isValid = validateLastName(value)
                break
            case 'dpi':
                isValid = validateDPI(value)
                break
            case 'numbercel':
                isValid = validateNumberCel(value)
                break
            case 'address':
                isValid = validateAddress(value)
                break
            case 'namework':
                isValid = validateName(value)
                break
            case 'monthlyincome':
                isValid = validateMonthlyIncome(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfir':
                isValid = validateConfirPassword(formState.password.value, value)
                break
            default:
                break
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            await register(
                formState.email.value,
                formState.name.value,
                formState.lastName.value,
                formState.password.value,
                formState.dpi.value,
                formState.numbercel.value,
                formState.address.value,
                formState.namework.value,
                formState.monthlyincome.value,
                formState.username.value
            );
            navigate('/auth');
            switchAuthHandler();
        } catch (error) {

            console.error("Error during registration:", error);
        }
    };



    const isSubmitButtonDisabled = isLoading ||
        !formState.email.isValid ||
        !formState.name.isValid ||
        !formState.lastName.isValid ||
        !formState.dpi.isValid ||
        !formState.numbercel.isValid ||
        !formState.address.isValid ||
        !formState.namework.isValid ||
        !formState.monthlyincome.isValid ||
        !formState.password.isValid ||
        !formState.passwordConfir.isValid

    return (
        <>

            <div className="h-[115vh] p-[5rem] flex-none" id="containerRegister">

                <div className=" lg:px-24 h-[550px] w-[165vh]">
                    <form className="bg-white rounded-md shadow-2xl p-[4rem] ">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Register</h1>
                        <p className="text-sm font-normal text-gray-600 mb-8">Create a new account</p>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <Input
                                className="input-field"
                                field='name'

                                value={formState.name.value}
                                onChangeHandler={handleInputValueChange}
                                type='text'
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.name.showError}
                                validationMessage={nameValidationMessage}
                                placeholder={"Nombre(s)"}
                            />                            </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <Input
                                className="input-field"
                                field='lastName'

                                value={formState.lastName.value}
                                onChangeHandler={handleInputValueChange}
                                type='text'
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.lastName.showError}
                                validationMessage={lastNameValidationMessage}
                                placeholder={"Apellido(s)"}
                            />
                        </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <Input
                                className="input-field"
                                field='dpi'

                                value={formState.dpi.value}
                                onChangeHandler={handleInputValueChange}
                                type='text'
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.dpi.showError}
                                validationMessage={dpiValidationMessage}
                                placeholder={"1234567890101"}
                            />
                        </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <Input
                                className="input-field"
                                field='numbercel'

                                value={formState.numbercel.value}
                                onChangeHandler={handleInputValueChange}
                                type='text'
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.numbercel.showError}
                                validationMessage={numberValidationMessage}
                                placeholder={"12345678"}
                            />
                        </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <Input
                                className="input-field"
                                field='address'

                                value={formState.address.value}
                                onChangeHandler={handleInputValueChange}
                                type='text'
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.address.showError}
                                validationMessage={dpiValidationMessage}
                                placeholder={"0 calle 0-0 zona 0"}
                            />
                        </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <Input
                                className="input-field"
                                field='namework'

                                value={formState.namework.value}
                                onChangeHandler={handleInputValueChange}
                                type='text'
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.namework.showError}
                                validationMessage={dpiValidationMessage}
                                placeholder={"Empresa"}
                            />
                        </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <Input
                                className="input-field"
                                field='monthlyincome'

                                value={formState.monthlyincome.value}
                                onChangeHandler={handleInputValueChange}
                                type='text'
                                onBlurHandler={handleInputValidationOnBlur}
                                showErrorMessage={formState.monthlyincome.showError}
                                validationMessage={dpiValidationMessage}
                                placeholder={"100.00"}
                            />
                        </div>
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
                            />                            </div>
                        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
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
        </>)
}
