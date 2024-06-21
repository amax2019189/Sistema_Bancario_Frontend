import React, { useEffect, useState } from "react";

const AccountDetails = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Función para obtener los datos del usuario desde localStorage
    const getUserDataFromLocalStorage = () => {
      const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserData(parsedUser);
      }
    };

    getUserDataFromLocalStorage();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      {userData ? (
        <div className="bg-white p-4 shadow-md rounded-md">
          <p>
            <strong>Nombre:</strong> {userData.name}
          </p>
          <p>
            <strong>Apellido:</strong> {userData.lastname}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Rol:</strong> {userData.roleUser}
          </p>
          {/* Aquí puedes agregar más campos según la estructura de tu usuario */}
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
};

export default AccountDetails;
