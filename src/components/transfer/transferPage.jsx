import React, { useState } from "react";
import { Input } from "../input/Input";
import { useTransfer } from "../../shared/hooks/useTransfer";
import Sidebar from "../sidebar/Sidebar";
import toast from "react-hot-toast";

import {
  validateAccountDestination,
  accountNumberDestinoValidateMessage,
  validateAccountOrigin,
  accountNumberOrigenValidateMessage,
  amountValidateMessage,
  validateAmount,
  validateDescription,
  descriptionValidateMessage
} from '../../shared/validators';

export const TransferPage = ({ switchPublicHandler }) => {
  const { trasnfer, isLoading } = useTransfer();

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
    saveAsFavorite: false,
    alias: {
      value: "",
      isValid: false,
      showError: false,
    }
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

  const handleTransfer = (event) => {
    event.preventDefault();

    const { accountNumberOrigen, accountNumberDestino, amount, description, saveAsFavorite, alias } = formState;

    trasnfer(
      accountNumberOrigen.value,
      accountNumberDestino.value,
      parseInt(amount.value),
      description.value,
      saveAsFavorite,
      saveAsFavorite ? alias.value : '' // Pass alias only if saveAsFavorite is true
    );
  }

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      saveAsFavorite: checked,
    }));
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formState.accountNumberOrigen.value ||
    !formState.accountNumberDestino.value ||
    !parseInt(formState.amount.value) ||
    !formState.description.value ||
    (formState.saveAsFavorite && !formState.alias.value); // Disable if saveAsFavorite is checked but alias is empty

  return (
    <>
    <Sidebar/>
      <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Transferencia</h1>
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

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="saveAsFavorite"
              checked={formState.saveAsFavorite}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="saveAsFavorite" className="text-sm">
              Agregar a favoritos
            </label>
          </div>

          {formState.saveAsFavorite && (
            <Input
              field="alias"
              label="Alias"
              value={formState.alias.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.alias.showError}
              validationMessage="Ingrese un alias válido"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <button
            onClick={handleTransfer}
            disabled={isSubmitButtonDisabled}
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Transferir
          </button>
        </form>
      </div>
    </>);
}; 