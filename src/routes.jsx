import { Register } from '../src/pages/register/Register.jsx';
import { AuthPage } from '../src/pages/auth'
import HomePage from './pages/homePage/HomePage.jsx'
import Prueba from './pages/prueba/prueba.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TransferPage from './components/TransferPage';

// Routes
const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/register', element: <Register /> },
    { path: '/*', element: <HomePage /> },
    { path: '/Prueba', element: <Prueba /> },
];

export default routes;

// Transfer
function App() {
    return (
      <Router>
        <Switch>
          {/* Otras rutas */}
          <Route path="/transfer" component={TransferPage} />
        </Switch>
      </Router>
    );
  }