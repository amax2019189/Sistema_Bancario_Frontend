import React from 'react';
import { useDeposit } from '../../shared/hooks'; // Ajusta la ruta según sea necesario
import { Input } from '../../components/input/Input'; // Ajusta la ruta según sea necesario

export const DepositForm = () => {
    const {
        depositData,
        error,
        loading,
        success,
        handleInputChange,
        handleInputBlur,
        handleSubmit,
    } = useDeposit();

    return (
        <form onSubmit={handleSubmit}>
            <Input
                field="accountNumber"
                label="Número de Cuenta"
                value={depositData.accountNumber}
                onChangeHandler={handleInputChange}
                type="text"
                showErrorMessage={!!error.accountNumber}
                validationMessage={error.accountNumber}
                onBlurHandler={handleInputBlur}
                placeholder="9876543210"
            />
            <Input
                field="amount"
                label="Monto"
                value={depositData.amount}
                onChangeHandler={handleInputChange}
                type="number"
                showErrorMessage={!!error.amount}
                validationMessage={error.amount}
                onBlurHandler={handleInputBlur}
                placeholder="123.45"
            />
            <Input
                field="description"
                label="Descripción"
                value={depositData.description}
                onChangeHandler={handleInputChange}
                type="text"
                showErrorMessage={false}
                validationMessage=""
                onBlurHandler={handleInputBlur}
                textarea={true}
                placeholder="Opcional"
            />
            <div className="input-label my-input-class">
                <span>Tipo de Cambio</span>
            </div>
            <div className="input-field my-input-class">
                <select
                    className="input-input my-input-class"
                    name="exchangeRate"
                    value={depositData.exchangeRate}
                    onChange={( e ) => handleInputChange( e.target.value, 'exchangeRate' )}
                >
                    <option value="quetzales">Quetzales</option>
                    <option value="dolares">Dólares</option>
                </select>
            </div>
            {error.form && <div style={{ color: 'red' }}>{error.form}</div>}
            {success && <div style={{ color: 'green' }}>Depósito realizado con éxito</div>}
            <button type="submit" disabled={loading}>
                {loading ? 'Procesando...' : 'Realizar Depósito'}
            </button>
        </form>
    );
};
