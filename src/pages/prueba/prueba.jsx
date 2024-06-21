
import React from 'react';
import AccountDetails from '../../components/account/account'; 

function Prueba() {
  return (
    <div className="about-page">
      <h1>Acerca de Nosotros</h1>
      <p>Bienvenido a nuestra página de acerca de nosotros.</p>
      <p>En nuestra empresa, nos dedicamos a proporcionar los mejores servicios.</p>
      <p>Nuestro equipo está compuesto por profesionales altamente calificados y apasionados por su trabajo.</p>
      <ul>
        <li>Misión: Proveer servicios de alta calidad</li>
        <li>Visión: Ser líderes en el mercado</li>
        <li>Valores: Integridad, Excelencia, Trabajo en equipo</li>
      </ul>
      {}
      <AccountDetails />
    </div>
  );
}

export default Prueba;
