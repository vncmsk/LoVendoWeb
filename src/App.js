<<<<<<< HEAD
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Login from './components/login/Login';
import gestionUsuarios from './components/gestionUsuarios/gestionUsuarios';
import gestionVendedores from './components/gestionVendedores/gestionVendedores';
import ReporteVentas from './components/reporteVentas/ReporteVentas';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login';
import GestionUsuarios from './pages/gestionUsuarios/GestionUsuarios';
import ReporteVentas from './pages/reporteVentas/ReporteVentas';
import GestionProductos from './pages/gestionProductos/GestionProductos';
import PerfilUsuario from './pages/profile/profile';
>>>>>>> desarrollo
import 'bootstrap/dist/css/bootstrap.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from './context/usercontext';
import React, { useState } from 'react';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import PrivateRoute from './components/privateroute/privateroute';
import AuthLayout from './layouts/AuthLayout';

function App() {
  const [userData, setUserData] = useState({});

  return (
<<<<<<< HEAD
    <div>
      <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/usuarios' component={gestionUsuarios} />
              <Route exact path='/vendedores' component={gestionVendedores} />
              <Route exact path='/reporte' component={ReporteVentas} />
            </Switch>
      </Router>
    </div>
=======
    <Auth0Provider
      domain="lovendo.us.auth0.com"
      clientId="DxYz0F52Edjs1lQpP8pWk6HcjeUYE2wP"
      redirectUri={'http://localhost:3000/perfil'}
      audience='https://lovendo.us.auth0.com/api/v2/'
    >
      <div className='App'>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>

              <Route path={['/productos', '/reporte', '/usuarios', '/perfil']}>
                <PrivateLayout>
                  <Switch>
                    <Route path='/productos'>
                      <PrivateRoute roleList={['admin']}>
                        <GestionProductos />
                      </PrivateRoute>
                    </Route>
                    <Route path='/reporte'>
                      <PrivateRoute roleList={['admin', 'vendedor']}>
                        <ReporteVentas />
                      </PrivateRoute>
                    </Route>
                    <Route path='/perfil'>
                      <PrivateRoute roleList={['admin', 'vendedor']}>
                        <PerfilUsuario />
                      </PrivateRoute>
                    </Route>
                    <Route path='/usuarios'>
                      <PrivateRoute roleList={['admin']}>
                        <GestionUsuarios />
                      </PrivateRoute>
                    </Route>
                  </Switch>
                </PrivateLayout>
              </Route>

              <Route path={['/login']}>
                <AuthLayout>
                  <Switch>
                    <Route path='/login'>
                      <Login />
                    </Route>
                  </Switch>
                </AuthLayout>
              </Route>

              <Route path={['/']}>
                <PublicLayout>
                  <Route path='/'>
                    <Login />
                  </Route>
                </PublicLayout>
              </Route>

            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    </Auth0Provider>
>>>>>>> desarrollo
  );
}

export default App;
