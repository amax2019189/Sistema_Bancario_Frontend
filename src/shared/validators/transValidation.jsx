// transferValidations.js
export const validateTransferData = (data) => {
    const errors = {};
  
    if (!data.accountNumberOrigen) {
      errors.accountNumberOrigen = 'El número de cuenta origen es requerido';
    }
  
    if (!data.accountNumberDestino) {
      errors.accountNumberDestino = 'El número de cuenta destino es requerido';
    }
  
    if (!data.amount) {
      errors.amount = 'El monto es requerido';
    } else if (isNaN(data.amount) || data.amount <= 0) {
      errors.amount = 'El monto debe ser un número positivo';
    } else if (data.amount > 2000) {
      errors.amount = 'No se puede transferir más de Q2000 en una sola transacción';
    }
  
    if (data.saveAsFavorite && !data.alias) {
      errors.alias = 'El alias es requerido para guardar como favorito';
    }
  
    return errors;
  };