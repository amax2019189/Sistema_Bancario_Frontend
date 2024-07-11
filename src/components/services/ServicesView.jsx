import React, { useEffect } from 'react';
import { usePaidServices } from '../../shared/hooks/usePaidServices'; // Ajusta la ruta según la estructura de tu proyecto
import './servicesView.css'

export const PaidServices = () => {
  const { getServices, isFetching, allServices } = usePaidServices();

  useEffect(() => {
    getServices();
  }, []);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!allServices || allServices.length === 0) {
    return <div>No paid services found.</div>;
  }

  return (
    <div className='recuadro'>
      <h2>Paid Services</h2>
      <ul>
        {allServices.map((service, index) => (
          <li key={index}>
            <h3>{service.service}</h3>
            <p>Account Number: {service.noAccount}</p>
            <p>Amount: {service.amount}</p>
            <p>Description: {service.description}</p>
            <p>Date: {new Date(service.dateService).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
