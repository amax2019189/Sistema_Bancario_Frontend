import { useState } from "react";
import { Input } from "../input/Input";

import {
    validateState,
    stateValidateMessage,
    validateWithdrawCode,
    withdrawCodeValidateMessage
} from '../../shared/validators'

import { useApproveLoan } from "../../shared/hooks/useApproveLoan"

export const LoanApproved = ({ switchPublicHandler }) => {

    const { approveLoan, isLoading } = useApproveLoan()
    
    const [formState, setFormState] = useState({
        withdrawCode: {
            value: "",
            isValid: false,
            showError: false,
        },
        state: {
            value: "",
            isValid: false,
            showError: false,
        },
    })

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
            case "withdrawCode":
                isValid = validateWithdrawCode(value);
                break;
            case "state":
                isValid = validateState(value);
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

    const handleApproveLoan = (event) => {
        event.preventDefault();

        approveLoan(
            formState.withdrawCode.value,
            formState.state.value
        );
    };

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.withdrawCode.isValid ||
        !formState.state.isValid;


    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Aprobacion servicio</h1>
            <form>
                <Input
                    field="withdrawCode"
                    label="WithdrawCode:"
                    value={formState.withdrawCode.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.withdrawCode.showError}
                    validationMessage={withdrawCodeValidateMessage}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <label htmlFor="state">State:</label>
                <select
                    id="state"
                    value={formState.state.value}
                    onChange={(e) => handleInputValueChange(e.target.value, "state")}
                    onBlur={() => handleInputValidationOnBlur(formState.state.value, "state")}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecciona un estado</option>
                    <option value="aprovada">aprovada</option>
                    <option value="pendiente">pendiente</option>
                    <option value="denegada">denegada</option>
                </select>

                <button onClick={handleApproveLoan} disabled={isSubmitButtonDisabled}
                    className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50">
                    Aprobar Prestamo
                </button>
            </form>
        </div>
    );
}
