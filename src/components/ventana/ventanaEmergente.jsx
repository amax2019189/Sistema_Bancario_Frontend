import React from 'react';

const VentanaEmergente = ({ account, onClose, onAction, action }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{action === 'deactivate' ? 'Desactivar' : 'Activar'} Cuenta</h3>
        <p>Correo asociado: {account.email}</p>
        <p>Tipo de cuenta: {account.accountType}</p>
        <p>Estado de cuenta: {account.state}</p>
        <p>¿Estás seguro de que deseas {action === 'deactivate' ? 'desactivar' : 'activar'} esta cuenta?</p>
        <button onClick={onAction}>{action === 'deactivate' ? 'Desactivar' : 'Activar'}</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default VentanaEmergente;
