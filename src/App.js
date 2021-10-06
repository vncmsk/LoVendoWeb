import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login/Login';
import gestionUsuarios from './components/gestionUsuarios/gestionUsuarios';
import gestionVendedores from './components/gestionVendedores/gestionVendedores';
import ReporteVentas from './components/reporteVentas/ReporteVentas';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/usuarios' component={gestionUsuarios} />
              <Route exact path='/vendedores' component={gestionVendedores} />
              <Route exact path='/reporte' component={ReporteVentas} />
            </Switch>
      </Router>
    </>
  );
}

export default App;
