export const validateDPI = ( dpi ) => {
    const regex = /^\d{13}$/
    return regex.test( dpi )
}

export const dpiValidationMessage = 'Por favor ingresa los 13 digitos de tu dpi'