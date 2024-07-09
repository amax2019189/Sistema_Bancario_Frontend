
import { useDeposit } from '../../shared/hooks'; // Adjust the path as needed
import { Input } from '../../components/input/Input'; // Adjust the path as needed

export const EditDepositForm = () => {
    const {
        depositData,
        error,
        loading,
        success,
        handleInputChange,
        handleInputBlur,
        handleEditSubmit,
    } = useDeposit();

    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <h1>Editar Depósito</h1>
                <Input
                    field="operationNumber"
                    label="Número de Operación"
                    value={depositData.operationNumber || ''} // Ensure default value is provided
                    onChangeHandler={handleInputChange}
                    type="text"
                    showErrorMessage={!!error.operationNumber}
                    validationMessage={error.operationNumber}
                    onBlurHandler={handleInputBlur}
                />
                <Input
                    field="amount"
                    label="Monto"
                    value={depositData.amount || ''} // Ensure default value is provided
                    onChangeHandler={handleInputChange}
                    type="number"
                    showErrorMessage={!!error.amount}
                    validationMessage={error.amount}
                    onBlurHandler={handleInputBlur}
                />
                <Input
                    field="description"
                    label="Descripción"
                    value={depositData.description || ''} // Ensure default value is provided
                    onChangeHandler={handleInputChange}
                    type="text"
                    showErrorMessage={false}
                    validationMessage=""
                    onBlurHandler={handleInputBlur}
                    textarea={true}
                    placeholder="Opcional"
                />
                {error.form && <div style={{ color: 'red' }}>{error.form}</div>}
                {success && <div style={{ color: 'green' }}>Depósito editado con éxito</div>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Procesando...' : 'Editar Depósito'}
                </button>
            </form>
        </div>

    );
};
