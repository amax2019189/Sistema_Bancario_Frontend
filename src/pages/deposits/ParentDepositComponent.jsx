import { useState } from "react";
import { DepositForm } from "./DepositForm";
import { EditDepositForm } from "./EditDepositForm";
import { ReverseDepositForm } from "./ReverseDepositForm";

export const ParentComponent = () => {
    const [showDepositForm, setShowDepositForm] = useState( false );
    const [showEditForm, setShowEditForm] = useState( false );
    const [showReverseForm, setShowReverseForm] = useState( false )

    const toggleDepositForm = () => {
        setShowDepositForm( !showDepositForm );
        setShowEditForm( false ); // Ensure only one form is shown at a time
        setShowReverseForm( false )
    };

    const toggleEditForm = () => {
        setShowEditForm( !showEditForm );
        setShowDepositForm( false ); // Ensure only one form is shown at a time
        setShowReverseForm( false )
    };

    const toggleReverseForm = () => {
        setShowReverseForm( !showReverseForm );
        setShowDepositForm( false ); // Ensure only one form is shown at a time
        setShowEditForm( false );
    };

    return (
        <div>
            <button onClick={toggleDepositForm}>
                {showDepositForm ? 'Ocultar Formulario de Depósito' : 'Mostrar Formulario de Depósito'}
            </button>
            {showDepositForm && <DepositForm />}

            <button onClick={toggleEditForm}>
                {showEditForm ? 'Ocultar Formulario de Edición' : 'Mostrar Formulario de Edición'}
            </button>
            {showEditForm && <EditDepositForm />}

            <button onClick={toggleReverseForm}>
                {showReverseForm ? 'Ocultar Formulario de Reversión' : 'Mostrar Formulario de Reversión'}
            </button>
            {showReverseForm && <ReverseDepositForm />}
        </div>
    );
};