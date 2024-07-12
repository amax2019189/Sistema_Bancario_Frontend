import { Register } from '../src/pages/register/Register.jsx';
import { AuthPage } from '../src/pages/auth'
import HomePage from './pages/homePage/HomePage.jsx'
import Prueba from './pages/prueba/prueba.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {TransferPage} from './components/transfer/transferPage.jsx';
import AccountPage from './pages/accountPage/AccountPage.jsx';
import { ParentComponent } from './components/deposits/ParentDepositComponent.jsx';
import AccountDetails from './components/account/account.jsx';
import Convertidor from './components/convertidor/Convertidor.jsx';
import { PayService } from "./components/services/ServicesForm.jsx";
import { PaidServices } from './components/services/ServicesView.jsx';
import { AccountBalance } from './components/accountBalance/AccountBalance.jsx';
import EditUser from './components/account/updateAccount.jsx';
import { RegisterServiceForm } from '../src/pages/registerService/registerServiceForm.jsx';
import { CreateAccountForm } from './components/accounts/CreateAccount.jsx'
import { LoanApproved } from './components/loan/loanApproved.jsx'
import { loanParentComponent } from './components/loan/loanParentComponent.jsx';
import { ActivateAccount } from './components/accounts/ActivateAccount.jsx';
import { DeactivateAccount } from './components/accounts/DesactivatedAccount.jsx';
import StatusAccount from './components/StatusAccount.jsx';

// Routes
const routes = [
  { path: '/auth', element: <AuthPage /> },
  { path: '/register', element: <Register /> },
  { path: '/*', element: <HomePage /> },
  { path: '/Prueba', element: <Prueba /> },
  { path: '/user', element: <AccountPage /> },
  { path: '/administrador', element: <ParentComponent /> },
  { path: '/myAccount', element: <AccountDetails /> },
  { path: '/conversor', element: <Convertidor /> },
  { path: '/transfer', element: <TransferPage /> },
  { path: '/services', element: <PayService /> },
  { path: '/accountBalance', element: <AccountBalance /> },
  { path: '/registerService', element: <RegisterServiceForm /> }, ,
  { path: '/loans', element: <loanParentComponent /> },
  { path: '/Approved', element: <LoanApproved /> },
  { path: '/loansApproved', element: <LoanGetApproved /> },
  { path: '/activateAccount', element: <ActivateAccount/>},
  { path: '/deactivateAccount', element: <DeactivateAccount/>},
  { path: '/nonApproved', element: <LoanComponent/>},
  { path: '/stateAccount', element: <StatusAccount /> },


];

export default routes;
