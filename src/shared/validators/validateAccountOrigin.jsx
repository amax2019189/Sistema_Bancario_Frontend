export const validateAccountOrigin = (accountNumberOrigen) => {
    return accountNumberOrigen.length >=10 && accountNumberOrigen.length <=10
}
export const accountNumberOrigenValidateMessage = 'El numero de cuenta debe contener 10 caracteres'
