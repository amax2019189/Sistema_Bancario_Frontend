export const validateDpiNumber = ( dpiNumber ) => {
    const regex = /^\d{13}$/
    return regex.test( dpiNumber )
}

export const dpiValidationMessage = 'Por favor ingresa los 13 digitos de tu dpi'