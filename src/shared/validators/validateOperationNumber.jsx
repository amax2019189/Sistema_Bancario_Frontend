// use a regex to test a string of 6 numerical characters
export const validateOperationNumber = ( operationNumber ) => {
    const regex = /^[0-9]{6}$/;
    return regex.test( operationNumber );
}

export const operationNumberValidationMessage = 'El número de operación debe de ser exactamente 6 digitos numéricos'