export const validateLastName = ( lastName ) => {
    const regex = /^(?! )[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]{3,35}(?<! )$/;
    const lastNameSinEspacios = lastName.replace( /\s+/g, '' );
    return regex.test( lastNameSinEspacios )
}

export const lastNameValidationMessage = 'Por favor ingresa tus apellidos en el rango de 3 a 35 letras'