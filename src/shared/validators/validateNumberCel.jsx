export const validateNumberCel = ( numbercel ) => {
    const regex = /^\d{8}$/;
    return regex.test( numbercel )
}

export const numberValidationMessage = 'Ingresa un numero de 8 digitos'