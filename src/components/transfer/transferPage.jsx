import React, { useState } from 'react';
import TransferForm from './TransferForm';
import useTransfer from '../hooks/useTransfer';

const TransferPage = () => {
  const { makeTransfer, loading, error } = useTransfer();
  const [successMessage, setSuccessMessage] = useState('');

  const handleTransfer = async (transferData) => {
    try {
      const result = await makeTransfer(transferData);
      setSuccessMessage('Transferencia realizada exitosamente');
    } catch (err) {
      // El error ya se maneja en el hook
    }
  };

  return (
    <div>
      <h1>Realizar Transferencia</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <TransferForm onSubmit={handleTransfer} isLoading={loading} />
    </div>
  );
};

export default TransferPage;

import React, { useState } from 'react';

const TransferForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    accountNumberOrigen: '',
    accountNumberDestino: '',
    amount: '',
    description: '',
    saveAsFavorite: false,
    alias: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="accountNumberOrigen"
        value={formData.accountNumberOrigen}
        onChange={handleChange}
        placeholder="Número de cuenta origen"
        required
      />
      <input
        type="text"
        name="accountNumberDestino"
        value={formData.accountNumberDestino}
        onChange={handleChange}
        placeholder="Número de cuenta destino"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Monto"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <label>
        <input
          type="checkbox"
          name="saveAsFavorite"
          checked={formData.saveAsFavorite}
          onChange={handleChange}
        />
        Guardar como favorito
      </label>
      {formData.saveAsFavorite && (
        <input
          type="text"
          name="alias"
          value={formData.alias}
          onChange={handleChange}
          placeholder="Alias para favorito"
        />
      )}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Procesando...' : 'Realizar Transferencia'}
      </button>
    </form>
  );
};

export default TransferForm;