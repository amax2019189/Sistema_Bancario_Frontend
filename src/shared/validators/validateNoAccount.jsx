export const validateNoAccount = ( noAccount ) => {
    const regex = /^\d{10}$/;
    return regex.test( noAccount )
}

export const noAccountValidationMessage = 'Ingresa un numero de 10 digitos'