import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/login/Login';
import gestionUsuarios from './pages/gestionUsuarios/gestionUsuarios';
import gestionVendedores from './pages/gestionVendedores/gestionVendedores';
import ReporteVentas from './pages/reporteVentas/ReporteVentas';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/usuarios' component={gestionUsuarios} />
              <Route exact path='/vendedores' component={gestionVendedores} />
              <Route exact path='/reporte' component={ReporteVentas} />
              <Route exact path='/' component={Login} />
            </Switch>
      </Router>
    </>
  );
}

export default App;
