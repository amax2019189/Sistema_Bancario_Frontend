export const validateTransferData = (data) => {
  // Declara un objeto vacío llamado errors para almacenar los mensajes de error
  const errors = {};

  // Verifica si accountNumberOrigen no está presente en data
  if (!data.accountNumberOrigen) {
      // Si no está presente, añade un mensaje de error al objeto errors
      errors.accountNumberOrigen = 'El número de cuenta origen es requerido';
  }

  // Verifica si accountNumberDestino no está presente en data
  if (!data.accountNumberDestino) {
      // Si no está presente, añade un mensaje de error al objeto errors
      errors.accountNumberDestino = 'El número de cuenta destino es requerido';
  }

  // Verifica si amount no está presente en data
  if (!data.amount) {
      // Si no está presente, añade un mensaje de error al objeto errors
      errors.amount = 'El monto es requerido';
  // Si amount está presente, verifica si no es un número o si es menor o igual a 0
  } else if (isNaN(data.amount) || data.amount <= 0) {
      // Si es el caso, añade un mensaje de error al objeto errors
      errors.amount = 'El monto debe ser un número positivo';
  // Si amount es mayor a 2000
  } else if (data.amount > 2000) {
      // Añade un mensaje de error al objeto errors indicando el límite máximo de transferencia
      errors.amount = 'No se puede transferir más de Q2000 en una sola transacción';
  }

  // Verifica si saveAsFavorite está presente y es verdadero, pero alias no está presente en data
  if (data.saveAsFavorite && !data.alias) {
      // Si es el caso, añade un mensaje de error al objeto errors
      errors.alias = 'El alias es requerido para guardar como favorito';
  }

  // Retorna el objeto errors con todos los mensajes de error encontrados
  return errors;
};
