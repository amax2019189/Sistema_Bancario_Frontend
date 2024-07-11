export const serviceTypeValidateMessage = 'Servicios validos peluqueria, electricidad, agua, zapateria, telefonia, ropa';

export const validateServiceType = (serviceType) => {
    const validServices = ['peluqueria', 'electricidad', 'agua', 'zapateria', 'telefonia', 'ropa'];
    return validServices.includes(serviceType);
}