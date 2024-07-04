import { useState } from "react";
import { DepositForm } from "./DepositForm";
import { EditDepositForm } from "./EditDepositForm";
import { ReverseDepositForm } from "./ReverseDepositForm";
import NavbarHome from '../NavbarHome'
import SectionA from "../../pages/homePage/SectionA";

export const ParentComponent = () => {
    const [showDepositForm, setShowDepositForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [showReverseForm, setShowReverseForm] = useState(false)

    const toggleDepositForm = () => {
        setShowDepositForm(!showDepositForm);
        setShowEditForm(false); // Ensure only one form is shown at a time
        setShowReverseForm(false)
    };

    const toggleEditForm = () => {
        setShowEditForm(!showEditForm);
        setShowDepositForm(false); // Ensure only one form is shown at a time
        setShowReverseForm(false)
    };

    const toggleReverseForm = () => {
        setShowReverseForm(!showReverseForm);
        setShowDepositForm(false); // Ensure only one form is shown at a time
        setShowEditForm(false);
    };

    return (
        <>
            <div className="mt-16 p-4">

                <button
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={toggleDepositForm}
                >
                    {showDepositForm ? 'Ocultar Formulario de Depósito' : 'Mostrar Formulario de Depósito'}
                </button>
                {showDepositForm && <DepositForm />}

                <button
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={toggleEditForm}
                >
                    {showEditForm ? 'Ocultar Formulario de Edición' : 'Mostrar Formulario de Edición'}
                </button>
                {showEditForm && <EditDepositForm />}

                <button
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={toggleReverseForm}
                >
                    {showReverseForm ? 'Ocultar Formulario de Reversión' : 'Mostrar Formulario de Reversión'}
                </button>
                {showReverseForm && <ReverseDepositForm />}

            </div>

        </>
    );
};