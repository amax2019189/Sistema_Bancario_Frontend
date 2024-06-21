
import { Input } from '../../components/input/Input';
import { useDeposit } from '../../shared/hooks'; // Adjust the path based on your setup

export const ReverseDepositForm = () => {
    const {
        depositData,
        error,
        loading,
        success,
        handleInputChange,
        handleInputBlur,
        handleReverseSubmit,
    } = useDeposit();

    return (
        <div>
            <form onSubmit={handleReverseSubmit}>
                <h1>Revertir Depósito</h1>
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
                {error.form && <div style={{ color: 'red' }}>{error.form}</div>}
                {success && <div style={{ color: 'green' }}>Depósito revertido con éxito</div>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Procesando...' : 'Revertir Depósito'}
                </button>
            </form>
        </div>

    );
};
