import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import routes from './routes.jsx';

const App = () => {
    const element = useRoutes(routes); // Asumiendo que tienes configurado react-router-dom

    return (
        <>
            {element}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
};

export default App;
