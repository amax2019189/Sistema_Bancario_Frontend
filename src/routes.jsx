import { Register } from '../src/pages/register/Register.jsx';
import { AuthPage } from '../src/pages/auth'
import HomePage from './pages/homePage/HomePage.jsx'
import Prueba from './pages/prueba/prueba.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TransferPage from './components/transfer/transferPage.jsx';
import AccountPage from './pages/accountPage/AccountPage.jsx';
import { ParentComponent } from './components/deposits/ParentDepositComponent.jsx';
import AccountDetails from './components/account/account.jsx';
import Convertidor from './components/convertidor/Convertidor.jsx';
import { PayService } from "./components/services/ServicesForm.jsx";
import { AccountBalance } from './components/accountBalance/AccountBalance.jsx';
import { RegisterServiceForm } from '../src/pages/registerService/registerServiceForm.jsx';


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
  { path: '/transfer', element: <TransferPage /> },
  {path: '/services', element: <PayService/>},
  { path: '/accountBalance', element: <AccountBalance/>},
  { path: '/registerService', element: <RegisterServiceForm/>}

];

export default routes;
