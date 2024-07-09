// validate a 10-digit number with a regular expression
export const validateAccountNumber = ( accountNumber ) => {
    const regex = /^[0-9]{10}$/

    return regex.test( accountNumber )
}

export const accountNumberValidationMessage = 'El número de cuenta debe ser de 10 digitos numéricos exactos'