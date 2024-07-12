import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { deleteAccount as deleteAccountRequest } from "../../services";

export const DeactivateAccount = () => {
  const [noAccount, setNoAccount] = useState('');
  const [dpi, setDpi] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!noAccount || !dpi) {
      return toast.error('Por favor, complete todos los campos');
    }

    setIsLoading(true);
    try {
      const response = await deleteAccountRequest({ noAccount, dpi });
      setIsLoading(false);

      if (response.error) {

        const errorMessage = typeof response.error === 'object' ? response.error.message : response.error;
        return toast.error(errorMessage || 'Ocurrió un error al desactivar cuenta, intenta de nuevo');
      }

      toast.success('Cuenta desactivada exitosamente');
      navigate('/newAccounts');
    } catch (error) {
      setIsLoading(false);
      console.error('desactived account failed', error);
      const errorMessage = typeof error === 'object' ? error.message : error;
      toast.error(errorMessage || 'Ocurrió un error al desactivar cuenta, intenta de nuevo');
    }
  };

  return (
    <div>
      <h1>Desactivar Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="noAccount">Número de Cuenta:</label>
          <input
            type="text"
            id="noAccount"
            value={noAccount}
            onChange={(e) => setNoAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dpi">DPI:</label>
          <input
            type="text"
            id="dpi"
            value={dpi}
            onChange={(e) => setDpi(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Desactivando...' : 'Desactivar Cuenta'}
        </button>
      </form>
    </div>
  );
};