import React, { useState, useEffect } from 'react';
import { editUser, getUser } from '../../services'; // Adjust path as per your file structure
import toast from 'react-hot-toast';
import { Input } from '../input/Input';
import { Sidebar } from '../sidebar/Sidebar'; // Adjust path as per your file structure

const EditUser = () => {
    const [userData, setUserData] = useState( {
        name: '',
        email: '',
        lastname: '',
        numbercel: '',
        img: '',
        password: '',
    } );

    const _id = localStorage.getItem( '_id' ); // Fetch _id from localStorage or context

    useEffect( () => {
        // Fetch user data from localStorage based on _id
        const fetchUserData = async () => {
            try {
                const response = await getUser( _id );
                const { name, email, lastname, numbercel, img } = response.data.user;
                setUserData( {
                    name,
                    email,
                    lastname,
                    numbercel,
                    img,
                    password: '',
                } );
            } catch ( error ) {
                console.error( 'Error fetching user data:', error );
                toast.error( error.message || 'Failed to fetch user data' );
            }
        }

        if ( _id ) {
            fetchUserData();
        }

    }, [_id] ); // Ensure useEffect runs when _id changes

    const handleChange = ( value, field ) => {
        // Update state with user input
        setUserData( ( prevUserData ) => ( {
            ...prevUserData,
            [field]: value,
        } ) );
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        try {
            // Call editUser function with userId and userData
            const response = await editUser( _id, userData );
            // Handle success scenario
            console.log( 'User updated successfully:', response );
            toast.success( 'User updated successfully!' );

        } catch ( error ) {
            console.error( 'Error updating user:', error );
            toast.error( error.message || 'Failed to update user' );
        }
    };

    return (
        <>

            <div className="container mx-auto mt-8">
                <Sidebar />
                <h2 className="text-3xl font-semibold mb-4">Edit User Information</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <Input
                        field="name"
                        label="Name"
                        value={userData.name}
                        onChangeHandler={handleChange}
                        type="text"
                        className="mb-4"
                        placeholder="Enter your name"
                    />
                    <Input
                        field="email"
                        label="Email"
                        value={userData.email}
                        onChangeHandler={handleChange}
                        type="email"
                        className="mb-4"
                        placeholder="Enter your email"
                    />
                    <Input
                        field="lastname"
                        label="Lastname"
                        value={userData.lastname}
                        onChangeHandler={handleChange}
                        type="text"
                        className="mb-4"
                        placeholder="Enter your lastname"
                    />
                    <Input
                        field="numbercel"
                        label="Numbercel"
                        value={userData.numbercel}
                        onChangeHandler={handleChange}
                        type="text"
                        className="mb-4"
                        placeholder="Enter your numbercel"
                    />
                    <Input
                        field="img"
                        label="Img"
                        value={userData.img}
                        onChangeHandler={handleChange}
                        type="text"
                        className="mb-4"
                        placeholder="Enter your img"
                    />
                    <Input
                        field="password"
                        label="Password"
                        value={userData.password}
                        onChangeHandler={handleChange}
                        type="password"
                        className="mb-4"
                        placeholder="Enter your password"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Update User
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditUser;
