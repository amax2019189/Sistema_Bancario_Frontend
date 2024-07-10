
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
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <form onSubmit={handleReverseSubmit}>
                <h1 className="text-2xl font-bold mb-6">Revertir Depósito</h1>
                <Input
                    field="operationNumber"
                    label="Número de Operación"
                    value={depositData.operationNumber || ''} // Ensure default value is provided
                    onChangeHandler={handleInputChange}
                    type="text"
                    showErrorMessage={!!error.operationNumber}
                    validationMessage={error.operationNumber}
                    onBlurHandler={handleInputBlur}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error.form && <div className="text-red-500 mb-4">{error.form}</div>}
                {success && <div className="text-green-500 mb-4">Depósito revertido con éxito</div>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? 'Procesando...' : 'Revertir Depósito'}
                </button>
            </form>
        </div>
    );

};
