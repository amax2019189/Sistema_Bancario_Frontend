
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
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Realizar Depósito</h1>
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
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Tipo de Cambio</label>
                    <select
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="exchangeRate"
                        value={depositData.exchangeRate}
                        onChange={(e) => handleInputChange(e.target.value, 'exchangeRate')}
                    >
                        <option value="quetzales">Quetzales</option>
                        <option value="dolares">Dólares</option>
                    </select>
                </div>
                {error.form && <div className="text-red-500 mb-4">{error.form}</div>}
                {success && <div className="text-green-500 mb-4">Depósito realizado con éxito</div>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? 'Procesando...' : 'Realizar Depósito'}
                </button>
            </form>
        </div>
    );
};
