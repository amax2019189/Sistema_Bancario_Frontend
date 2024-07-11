/* eslint-disable no-unused-vars */
import { useState } from "react";
import { logout as logoutHandler } from "./useLogout";

const getUserDetails = () => {
    const userDetails = localStorage.getItem( "user" );
    if ( userDetails ) {
        return JSON.parse( userDetails );
    }
    return null;
};

export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState( getUserDetails() );

    const logout = () => {
        logoutHandler();
    };

    return {
        isLogged: Boolean( userDetails ),
        name: userDetails?.name ? userDetails.name : "Guest",
        lastName: userDetails?.lastName ? userDetails.lastName : "",
        email: userDetails?.email ? userDetails.email : "",
        rolerUser: userDetails?.rolerUser ? userDetails.rolerUser : "",
        numbercel: userDetails?.numbercel ? userDetails.numbercel : "",
        address: userDetails?.address ? userDetails.address : "",
        logout,
    };
};
