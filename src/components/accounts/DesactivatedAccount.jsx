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
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Desactivar Cuenta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="noAccount" className="block text-gray-700 font-semibold mb-2">Número de Cuenta</label>
            <input
              type="text"
              id="noAccount"
              value={noAccount}
              onChange={(e) => setNoAccount(e.target.value)}
              required
              placeholder="Numero de cuenta"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="dpi" className="block text-gray-700 font-semibold mb-2">DPI</label>
            <input
              type="text"
              id="dpi"
              value={dpi}
              onChange={(e) => setDpi(e.target.value)}
              required
              placeholder="DPI"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            {isLoading ? 'Desactivando...' : 'Desactivar Cuenta'}
          </button>
        </form>
      </div>
    </div>
  );
};