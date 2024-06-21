export const validateName = ( name ) => {
    const regex = /^(?! )[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]{3,35}(?<! )$/;
    const nameSinEspacios = name.replace( /\s+/g, '' );
    return regex.test( nameSinEspacios )
}

export const nameValidationMessage = 'Por favor ingresa tus nombres en el rango de 3 a 35 letras'