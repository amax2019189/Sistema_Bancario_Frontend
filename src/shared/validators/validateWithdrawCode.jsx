export const validateWithdrawCode = (withdrawCode) => {
    return withdrawCode.length > 7 && withdrawCode.length <= 15
}

export const withdrawCodeValidateMessage = 'withdrawCode  debe tener 10 digitos'