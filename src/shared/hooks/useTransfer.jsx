import { useState } from 'react'; // Importa el hook useState de React para manejar estados locales en el componente.
import axios from 'axios'; // Importa la biblioteca axios para realizar solicitudes HTTP.

const useTransfer = () => { // Define un hook personalizado llamado useTransfer.
  const [loading, setLoading] = useState(false); // Declara un estado local 'loading' para manejar el estado de carga y su función para actualizarlo 'setLoading'.
  const [error, setError] = useState(null); // Declara un estado local 'error' para manejar errores y su función para actualizarlo 'setError'.

  const makeTransfer = async (transferData) => { // Define una función asincrónica llamada makeTransfer que toma los datos de transferencia como argumento.
    setLoading(true); // Establece el estado de carga en verdadero cuando comienza la transferencia.
    setError(null); // Resetea el estado de error a null antes de intentar la transferencia.
    try {
      const response = await axios.post('/api/transfer/makeTransfer', transferData, { // Realiza una solicitud POST a la API con los datos de transferencia.
        headers: { // Configura los encabezados de la solicitud.
          'Content-Type': 'application/json', // Especifica que el contenido es JSON.
          'x-token': localStorage.getItem('token') // Añade el token de autenticación desde localStorage en los encabezados.
        }
      });
      setLoading(false); // Establece el estado de carga en falso después de que la solicitud se complete con éxito.
      return response.data; // Devuelve los datos de la respuesta.
    } catch (err) { // Captura cualquier error que ocurra durante la solicitud.
      setLoading(false); // Establece el estado de carga en falso si ocurre un error.
      setError(err.response?.data || 'Ocurrió un error al realizar la transferencia'); // Establece el estado de error con el mensaje de error apropiado.
      throw err; // Lanza el error para que pueda ser manejado por el componente que usa este hook.
    }
  };

  return { makeTransfer, loading, error }; // Devuelve la función makeTransfer y los estados loading y error para que puedan ser usados en el componente.
};

export default useTransfer; // Exporta el hook personalizado useTransfer para que pueda ser importado y utilizado en otros componentes.