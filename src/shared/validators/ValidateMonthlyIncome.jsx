export const validateMonthlyIncome = (ingreso) => {
    const regex = /^\d+(\.\d{1,2})?$/; // Acepta números enteros o decimales con hasta dos dígitos decimales
    return regex.test(ingreso) && Number(ingreso) >= 0;
}

export const ingresoValidationMessage = 'Por favor, ingrese un número válido mayor o igual a 0.';