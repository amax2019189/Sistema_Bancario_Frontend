
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
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Realizar Depósito</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Número de Cuenta</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={depositData.accountNumber}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        placeholder="9876543210"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {!!error.accountNumber && (
                        <p className="text-red-500 text-sm mt-1">{error.accountNumber}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Monto</label>
                    <input
                        type="number"
                        name="amount"
                        value={depositData.amount}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        placeholder="123.45"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {!!error.amount && (
                        <p className="text-red-500 text-sm mt-1">{error.amount}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Descripción</label>
                    <textarea
                        name="description"
                        value={depositData.description}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        placeholder="Opcional"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Tipo de Cambio</label>
                    <select
                        name="exchangeRate"
                        value={depositData.exchangeRate}
                        onChange={(e) => handleInputChange(e.target.value, 'exchangeRate')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="quetzales">Quetzales</option>
                        <option value="dolares">Dólares</option>
                    </select>
                </div>
                {error.form && (
                    <div className="text-red-500 mb-4">
                        {error.form}
                    </div>
                )}
                {success && (
                    <div className="text-green-500 mb-4">
                        Depósito realizado con éxito
                    </div>
                )}
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
