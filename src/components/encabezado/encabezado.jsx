import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComp from '../privatecomp/PrivateComp'

function Header() {
  const { logout, user } = useAuth0();

  const salir = () => {
    logout({ returnTo: 'https://tranquil-tundra-14749.herokuapp.com/login' })
    localStorage.setItem('token', null);
  }

  return (
    <div className="row align-items-center justify-content-center">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <ul className="navbar-nav">

          <div className="col-3 align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-light" to='/reporte'><h4>LoVendo.com</h4></Link></li>
          </div>

          <div className="col-3 align-self-center">
            <PrivateComp roleList={['admin']}>
              <li className="nav-item">
                <Link className="nav-link" to='/usuarios'>| &nbsp;
                  <i className="far fa-user-circle"> Gestion usuarios</i></Link></li>
            </PrivateComp>
          </div>

          <div className="col-3 align-self-center">
            <PrivateComp roleList={['admin', 'vendedor']}>
              <li className="nav-item">
                <Link className="nav-link" to='/reporte'>| &nbsp;
                  <i className="fas fa-cart-arrow-down"></i> Gestion ventas</Link></li>
            </PrivateComp>
          </div>

          <div className="col-3 align-self-center">
            <PrivateComp roleList={['admin', 'vendedor']}>
              <li className="nav-item">
                <Link className="nav-link" to='/productos'>| &nbsp;
                  <i className="fas fa-boxes"> Gestion productos</i></Link></li>
            </PrivateComp>
          </div>

          <div className="col-1 align-self-center">
            <PrivateComp roleList={['admin', 'vendedor']}>
              <li className="nav-item">
                <Link className="nav-link" to='/perfil'>| &nbsp;
                  <img src={user.picture} width="30px" alt="Logo" className="rounded" /></Link></li>
            </PrivateComp>
          </div>

          <div className="col-2 align-self-center">
            <PrivateComp roleList={['admin', 'vendedor']}>
              <li className="nav-item">
                <Link className="nav-link" to='/perfil'>
                  <i className="">{user.name}&nbsp;&nbsp;&nbsp;|</i></Link></li>
            </PrivateComp>
          </div>

          <div className="col-2 align-self-center">
            <li className="nav-item">
              <Link onClick={() => salir()} className="nav-link" to='/login'> 
                <i className="fas fa-sign-out-alt">&nbsp;Salir</i></Link></li>
          </div>
        </ul>
      </nav>
    </div>

  );
}

export default Header;
