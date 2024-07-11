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
<<<<<<< HEAD
import RegisterServiceForm from './pages/registerService/registerServiceForm.jsx';
=======
import { PayService } from "./components/services/ServicesForm.jsx";
import { AccountBalance } from './components/accountBalance/AccountBalance.jsx';
>>>>>>> 5ab5b67eaa08da859ca66e2f8001124ba7904af4

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
<<<<<<< HEAD
  { path: '/registerService', element: <RegisterServiceForm/>}

=======
  {path: '/services', element: <PayService/>},
  { path: '/accountBalance', element: <AccountBalance/>}
>>>>>>> 5ab5b67eaa08da859ca66e2f8001124ba7904af4

];

export default routes;
