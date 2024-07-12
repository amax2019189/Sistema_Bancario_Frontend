import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";


const NavButton = ({ text, id, onClickHandler, className }) => {
  return (
    <span className={className} id={id} onClick={() => onClickHandler(id)} style={{ color: 'white', cursor: 'pointer' }}>
      {text}
    </span >
  );
};

const AccountDetails = () => {
  const navi = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to obtain user data from localStorage
    const getUserDataFromLocalStorage = () => {
      const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserData(parsedUser);
      }
    };

    getUserDataFromLocalStorage();
  }, []);



  // Function to format birthdate
  const formatDate = (birthdate) => {
    if (!birthdate) return ""; // Handle case where birthdate is not available

    // Create a Date object from birthdate string
    const dateObj = new Date(birthdate);

    // Format the date as desired (e.g., DD/MM/YYYY)
    return dateObj.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleEdit = () => {
    navi('/editUser')
  }

  return (
    <div id="body" className="bg-slate-50 h-screen flex">
      <Sidebar />
      <div className="container mx-auto mt-[5rem] w-full  flex-col ml-80">

        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Mi cuenta
        </h1>

        {userData ? (
          <div className="bg-white p-8 shadow-2xl rounded-lg max-w-lg mx-auto">
            <div className="flex flex-col items-center mb-6">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt="User Avatar"
                className="w-[18rem] h-[18rem] rounded-full border-4 border-gray-300 mb-4"
              />
              <p className="text-2xl font-semibold text-gray-900">
                {userData.name} {userData.lastname}
              </p>
              <p className="text-lg text-gray-600">{userData.email}</p>
            </div>
            <div className="border-t border-gray-200 mt-6 pt-6">
              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">Rol:</span>{" "}
                {userData.roleUser}
              </p>
              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">Dirección:</span>{" "}
                {userData.address || "No disponible"}
              </p>
              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">
                  Teléfono:
                </span>{" "}
                {userData.numbercel || "No disponible"}
              </p>
              <p className="text-xl text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">
                  Fecha de nacimiento:
                </span>{" "}
                {userData.birthdate ? formatDate(userData.birthdate) : "No disponible"}
              </p>
              <p className="text-xl text-gray-700">
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                {userData.email}
              </p>
              <NavButton className="block px-4 py-2.5 bg-[#00AAE5] text-white hover:bg-[#00AAE4] hover:text-white rounded-lg" id='editButton' text="Edit User" onClickHandler={handleEdit} />
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
