export const validateState = (state) => {
    const validateState = ['aprovada', 'pendiente', 'denegada'];
    return validateState.includes(state);
}

export const stateValidateMessage = 'estados validos aprovada, pendiente, denegada';