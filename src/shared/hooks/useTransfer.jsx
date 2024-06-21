// useTransfer.js
import { useState } from 'react';
import axios from 'axios';

const useTransfer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeTransfer = async (transferData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/transfer/makeTransfer', transferData, {
        headers: {
          'Content-Type': 'application/json',
          'x-token': localStorage.getItem('token') // Asumiendo que guardas el token en localStorage
        }
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data || 'Ocurrió un error al realizar la transferencia');
      throw err;
    }
  };

  return { makeTransfer, loading, error };
};

export default useTransfer;