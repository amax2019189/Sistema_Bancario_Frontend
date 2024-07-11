export const validateAccountDestination = (accountNumberDestino) => {
    return accountNumberDestino.length >=10 && accountNumberDestino.length <=10
}
export const accountNumberDestinoValidateMessage = 'El numero de cuenta debe contener 10 caracteres'