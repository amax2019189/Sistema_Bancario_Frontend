import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
//import { useTransfer } from '../../shared/hooks';
import { useFavorites } from '../../shared/hooks/useFavorites';
import toast from 'react-hot-toast';
import HeadPage from '../HeadPage';
import HeaderTransfer from './HeaderTransfer';

const TransferForm = ( { onSubmit, isLoading } ) => {
  const { makeTransfer } = useTransfer();
  const { addFavorite } = useFavorites();
  const userForId = localStorage.getItem( 'user' )
  const { _id } = JSON.parse( userForId );
  const [formData, setFormData] = useState( {
    accountNumberOrigen: '',
    accountNumberDestino: '',
    amount: '',
    description: '',
    saveAsFavorite: false,
    alias: ''
  } );

  const handleChange = ( e ) => {
    const { name, value, type, checked } = e.target;
    setFormData( prevState => ( {
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    } ) );
  };

  const handleSubmit = async ( e ) => {
    e.preventDefault();
    try {
      await makeTransfer( formData );
      if ( formData.saveAsFavorite ) {
        await addFavorite( _id, { accountNumber: formData.accountNumberDestino, alias: formData.alias } );
      }
      toast.success( 'Transferencia realizada exitosamente' );
    } catch ( err ) {
      // Error handling is done inside the hooks
    }
  };

  return (
    <>
      <Sidebar />
      <div className='ml-80 p-nonel'>
        <HeaderTransfer />
      </div>
      <div className='container right w-full flex gap-2 flex-col ml-30 mx-[20rem] mt-[2rem]'>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <div className="mb-6">
            <input
              type="text"
              name="accountNumberOrigen"
              value={formData.accountNumberOrigen}
              onChange={handleChange}
              placeholder="Número de cuenta origen"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="accountNumberDestino"
              value={formData.accountNumberDestino}
              onChange={handleChange}
              placeholder="Número de cuenta destino"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Monto"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descripción"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="saveAsFavorite"
              checked={formData.saveAsFavorite}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">Guardar como favorito</label>
          </div>
          {formData.saveAsFavorite && (
            <div className="mb-6">
              <input
                type="text"
                name="alias"
                value={formData.alias}
                onChange={handleChange}
                placeholder="Alias para favorito"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Procesando...' : 'Realizar Transferencia'}
          </button>
        </form>
      </div>
    </>
  );
};

export default TransferForm;
