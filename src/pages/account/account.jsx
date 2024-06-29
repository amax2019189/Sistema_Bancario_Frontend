import React, { useState } from 'react';
import useAccounts from '../../shared/hooks/useAccount';
import { getToken, getUserRole } from '../../services/authUtils';
import { createAccount, deactivateAccount, activateAccount } from '../../services/api';
import VentanaEmergente from '../../components/ventana/ventanaEmergente';
import { validateRole } from '../../shared/validators/validateRole'; // Importa la función de validación

const AccountsPage = () => {
  const _token = localStorage.getItem('user');
  const { accounts, isLoading, error, refetchAccounts } = useAccounts(_token);

  const [formData, setFormData] = useState({
    dpiNumber: '',
    accountType: '',
  });

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const { dpiNumber, accountType } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAccount(formData.dpiNumber, formData.accountType, "");
      refetchAccounts();
      setFormData({
        dpiNumber: '',
        accountType: '',
      });
    } catch (error) {
      console.error('Error al crear la cuenta:', error);
    }
  };

  const openModal = (account, action) => {
    setSelectedAccount(account);
    setModalAction(action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAccount(null);
    setIsModalOpen(false);
  };

  const handleAction = async () => {
    try {
      const userRole = getUserRole(); // Obtener el rol del usuario
      if (!validateRole(userRole)) {
        alert('No tienes permiso para realizar esta acción.');
        return;
      }

      if (modalAction === 'deactivate') {
        await deactivateAccount(selectedAccount._id);
      } else if (modalAction === 'activate') {
        await activateAccount(selectedAccount._id);
      }
      closeModal();
      refetchAccounts();
    } catch (error) {
      console.error(`Error al ${modalAction === 'deactivate' ? 'desactivar' : 'activar'} la cuenta:`, error);
    }
  };

  if (isLoading) {
    return <p>Cargando cuentas...</p>;
  }

  return (
    <div>
      <h2>Mis Cuentas</h2>
      {accounts.length === 0 ? (
        <p>No hay cuentas disponibles.</p>
      ) : (
        <ul>
          {accounts.map((account) => (
            <li key={account._id}>
              <p>Correo asociado: {account.email}</p>
              <p>Tipo de cuenta: {account.accountType}</p>
              <p>Estado de cuenta: {account.state}</p>
              <button onClick={() => openModal(account, 'deactivate')}>¿Quieres desactivar tu cuenta?</button>
              <button onClick={() => openModal(account, 'activate')}>¿Quieres activar tu cuenta?</button>
            </li>
          ))}
        </ul>
      )}

      <h2>Crear Nueva Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dpiNumber">DPI</label>
          <input
            type="text"
            id="dpiNumber"
            name="dpiNumber"
            value={dpiNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="accountType">Tipo de Cuenta</label>
          <input
            type="text"
            id="accountType"
            name="accountType"
            value={accountType}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>

      {isModalOpen && (
        <VentanaEmergente
          account={selectedAccount}
          onClose={closeModal}
          onAction={handleAction}
          action={modalAction}
        />
      )}
    </div>
  );
};

export default AccountsPage;
