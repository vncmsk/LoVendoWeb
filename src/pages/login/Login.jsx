import React from 'react';
import '../../styles/login.css';
import { Link } from 'react-router-dom';
import logo from '../../imagenes/logo.jpg';

const Login = () => {
    return (

        <body>
            <div className="row align-items-end">

                <div className="col-6 row align-items-center mt-5 p-3">
                    <img className="img-fluid" src={logo} width="200px" alt="Logo" />
                </div>

                <div className="col-3 col align-self-end">
                    <main className="form-signin">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">LoVendo.com</h1>

                            <div className="form-floating">
                                <input className="form-control" id="floatingInput" placeholder="Nombre de usuario" />
                                <label for="floatingInput">Nombre de usuario</label>
                            </div>

                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                                <label for="floatingPassword">Contraseña</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="Recordarme" /> Recordarme
                                </label>
                            </div>

                            <Link to='/reporte'>
                                <button className="w-100 btn btn-warning btn-primary" type="submit" href="reporteVentas.jsx">Inicio de sesión
                                </button>
                            </Link>
                        </form>
                    </main>
                </div>
            </div>
        </body>
    );
}

export default Login;
