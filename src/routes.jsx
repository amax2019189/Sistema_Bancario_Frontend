import { Register } from '../src/pages/register/Register.jsx';
import { AuthPage } from '../src/pages/auth'
import HomePage from './pages/homePage/HomePage.jsx'
import Prueba from './pages/prueba/prueba.jsx';
import AccountPage from './pages/accountPage/AccountPage.jsx';

// Routes
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <HomePage /> },
    { path: '/Prueba', element: <Prueba /> },
    { path: '/user', element: <AccountPage /> }
];

export default routes;