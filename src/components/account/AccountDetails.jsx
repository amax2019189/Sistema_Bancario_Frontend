import React from 'react';

export const AccountDetails = ({ account }) => {
  return (
    <div className="account-details">
      <h2>Detalles de la Cuenta</h2>
      <p>Número de Cuenta: {account.accountNumber}</p>
      <p>Estado: {account.status}</p>
      <p>Número de Movimientos: {account.movements.length}</p>
      <p>Saldo: {account.balance}</p>
      <h3>Movimientos Recientes</h3>
      <ul>
        {account.movements.slice(0, 5).map((movement, index) => (
          <li key={index}>
            {movement.type}: {movement.amount} - {movement.date}
          </li>
        ))}
      </ul>
    </div>
  );
};