import { Register } from '../src/pages/register/Register.jsx';
import { AuthPage } from '../src/pages/auth'
import HomePage from './pages/homePage/HomePage.jsx'
import Prueba from './pages/prueba/prueba.jsx';
import AccountPage from './pages/accountPage/AccountPage.jsx';
import { ParentComponent } from './components/deposits/ParentDepositComponent.jsx';
import AccountDetails from './components/account/account.jsx';
import Convertidor from './components/convertidor/Convertidor.jsx';

// Routes
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <HomePage /> },
    { path: '/Prueba', element: <Prueba /> },
    { path: '/user', element: <AccountPage /> },
    { path: '/deposits', element: <ParentComponent /> },
    { path: '/myAccount', element: <AccountDetails /> },
    { path: '/conversor', element: <Convertidor /> },


];

export default routes;