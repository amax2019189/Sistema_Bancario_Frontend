
import useTransfer from '../../shared/hooks/useTransfer';

// Declara el componente funcional TransferPage
const TransferPage = () => {
  // Usa el hook useTransfer para obtener las funciones y variables necesarias para la transferencia
  const { makeTransfer, loading, error } = useTransfer();
  // Usa el hook useState para manejar el mensaje de éxito de la transferencia
  const [successMessage, setSuccessMessage] = useState('');

  // Declara una función asíncrona handleTransfer que se encarga de realizar la transferencia
  const handleTransfer = async (transferData) => {
    try {
      // Intenta realizar la transferencia usando la función makeTransfer
      const result = await makeTransfer(transferData);
      // Si la transferencia es exitosa, actualiza el mensaje de éxito
      setSuccessMessage('Transferencia realizada exitosamente');
    } catch (err) {
      // El error ya se maneja en el hook useTransfer
    }
  };

  // Retorna el JSX que representa la interfaz de usuario de la página de transferencia
  return (
    <div>
      {/* Título de la página */}
      <h1>Realizar Transferencia</h1>
      {/* Muestra el error si existe */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Muestra el mensaje de éxito si existe */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {/* Renderiza el formulario de transferencia y pasa las props necesarias */}
      <TransferForm onSubmit={handleTransfer} isLoading={loading} />
    </div>
  );
};

// Exporta el componente TransferPage como el export por defecto
// export default TransferPage;

// Importa la biblioteca React y el hook useState desde React
import React, { useState } from 'react';

// Declara el componente funcional TransferForm que recibe las props onSubmit e isLoading
const TransferForm = ({ onSubmit, isLoading }) => {
  // Usa el hook useState para manejar los datos del formulario
  const [formData, setFormData] = useState({
    accountNumberOrigen: '',
    accountNumberDestino: '',
    amount: '',
    description: '',
    saveAsFavorite: false,
    alias: ''
  });

  // Declara una función handleChange para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Actualiza el estado del formulario según el campo que se haya modificado
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Declara una función handleSubmit para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función onSubmit pasada como prop con los datos del formulario
    onSubmit(formData);
  };

  // Retorna el JSX que representa el formulario de transferencia
  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <input
          type="text"
          name="accountNumberOrigen"
          value={formData.accountNumberOrigen}
          onChange={handleChange}
          placeholder="Número de cuenta origen"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="accountNumberDestino"
          value={formData.accountNumberDestino}
          onChange={handleChange}
          placeholder="Número de cuenta destino"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Monto"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          name="saveAsFavorite"
          checked={formData.saveAsFavorite}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-gray-700">Guardar como favorito</label>
      </div>
      {formData.saveAsFavorite && (
        <div className="mb-6">
          <input
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleChange}
            placeholder="Alias para favorito"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Procesando...' : 'Realizar Transferencia'}
      </button>
    </form>
  );
};

// Exporta el componente TransferForm como el export por defecto
export default TransferForm;
