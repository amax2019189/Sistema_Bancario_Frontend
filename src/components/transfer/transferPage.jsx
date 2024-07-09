
import useTransfer from '../../shared/hooks/useTransfer';

// Declara el componente funcional TransferPage
const TransferPage = () => {
  // Usa el hook useTransfer para obtener las funciones y variables necesarias para la transferencia
  const { makeTransfer, loading, error } = useTransfer();
  // Usa el hook useState para manejar el mensaje de éxito de la transferencia
  const [successMessage, setSuccessMessage] = useState( '' );

  // Declara una función asíncrona handleTransfer que se encarga de realizar la transferencia
  const handleTransfer = async ( transferData ) => {
    try {
      // Intenta realizar la transferencia usando la función makeTransfer
      const result = await makeTransfer( transferData );
      // Si la transferencia es exitosa, actualiza el mensaje de éxito
      setSuccessMessage( 'Transferencia realizada exitosamente' );
    } catch ( err ) {
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
const TransferForm = ( { onSubmit, isLoading } ) => {
  // Usa el hook useState para manejar los datos del formulario
  const [formData, setFormData] = useState( {
    accountNumberOrigen: '',
    accountNumberDestino: '',
    amount: '',
    description: '',
    saveAsFavorite: false,
    alias: ''
  } );

  // Declara una función handleChange para manejar los cambios en los campos del formulario
  const handleChange = ( e ) => {
    const { name, value, type, checked } = e.target;
    // Actualiza el estado del formulario según el campo que se haya modificado
    setFormData( prevState => ( {
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    } ) );
  };

  // Declara una función handleSubmit para manejar el envío del formulario
  const handleSubmit = ( e ) => {
    e.preventDefault();
    // Llama a la función onSubmit pasada como prop con los datos del formulario
    onSubmit( formData );
  };

  // Retorna el JSX que representa el formulario de transferencia
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

// Exporta el componente TransferForm como el export por defecto
export default TransferForm;
