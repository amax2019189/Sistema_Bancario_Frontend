
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
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <form onSubmit={handleEditSubmit}>
                <h1 className="text-2xl font-bold mb-6">Editar Depósito</h1>
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
                <Input
                    field="amount"
                    label="Monto"
                    value={depositData.amount || ''} // Ensure default value is provided
                    onChangeHandler={handleInputChange}
                    type="number"
                    showErrorMessage={!!error.amount}
                    validationMessage={error.amount}
                    onBlurHandler={handleInputBlur}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error.form && <div className="text-red-500 mb-4">{error.form}</div>}
                {success && <div className="text-green-500 mb-4">Depósito editado con éxito</div>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? 'Procesando...' : 'Editar Depósito'}
                </button>
            </form>
        </div>
    );
};
