import { useState } from "react";
import { Input } from "../input/Input";

import {
    validateAccountDestination,
    accountNumberDestinoValidateMessage,
    validateAccountOrigin,
    accountNumberOrigenValidateMessage,
    amountValidateMessage,
    validateAmount,
    validateDescription,
    descriptionValidateMessage,
    validateServiceType,
    serviceTypeValidateMessage
} from '../../shared/validators';

import { usePayServices } from "../../shared/hooks/usePayServices";

export const PayService = ({ switchPublicHandler }) => {
    const { payService, isLoading } = usePayServices();

    const [formState, setFormState] = useState({
        accountNumberOrigen: {
            value: "",
            isValid: false,
            showError: false,
        },
        accountNumberDestino: {
            value: "",
            isValid: false,
            showError: false,
        },
        amount: {
            value: "",
            isValid: false,
            showError: false,
        },
        description: {
            value: "",
            isValid: false,
            showError: false,
        },
        service: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "accountNumberOrigen":
                isValid = validateAccountOrigin(value);
                break;
            case "accountNumberDestino":
                isValid = validateAccountDestination(value);
                break;
            case "amount":
                isValid = validateAmount(value);
                break;
            case "description":
                isValid = validateDescription(value);
                break;
            case "service":
                isValid = validateServiceType(value);
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handlePayService = (event) => {
        event.preventDefault();

        payService(
            formState.accountNumberOrigen.value,
            formState.accountNumberDestino.value,
            parseInt(formState.amount.value),
            formState.description.value,
            formState.service.value
        );
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.accountNumberOrigen.isValid ||
        !formState.accountNumberDestino.isValid ||
        !formState.amount.isValid ||
        !formState.description.isValid ||
        !formState.service.isValid;

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Pagar Servicio</h1>
            <form>
                <Input
                    field="accountNumberOrigen"
                    label="Cuenta Origen:"
                    value={formState.accountNumberOrigen.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.accountNumberOrigen.showError}
                    validationMessage={accountNumberOrigenValidateMessage}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    field="accountNumberDestino"
                    label="Cuenta Destino"
                    value={formState.accountNumberDestino.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.accountNumberDestino.showError}
                    validationMessage={accountNumberDestinoValidateMessage}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    field="amount"
                    label="Amount"
                    value={formState.amount.value}
                    onChangeHandler={handleInputValueChange}
                    type="Number"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.amount.showError}
                    validationMessage={amountValidateMessage}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Input
                    field="description"
                    label="Descripcion"
                    value={formState.description.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.description.showError}
                    validationMessage={descriptionValidateMessage}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="service">Service Type:</label>
                <select
                    id="service"
                    value={formState.service.value}
                    onChange={(e) => handleInputValueChange(e.target.value, "service")}
                    onBlur={() => handleInputValidationOnBlur(formState.service.value, "service")}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecciona una materia</option>
                    <option value="peluqueria">Peluqueria</option>
                    <option value="electricidad">Electricidad</option>
                    <option value="agua">Agua</option>
                    <option value="zapateria">Zapateria</option>
                    <option value="telefonia">Telefonia</option>
                    <option value="ropa">Ropa</option>
                </select>

                <button onClick={handlePayService} disabled={isSubmitButtonDisabled}
                className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50">
                    Pagar Servicio
                </button>
            </form>
        </div>
    );
}