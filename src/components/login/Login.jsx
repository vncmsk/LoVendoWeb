import React from 'react';
import '../../styles/login.css';
import { Link } from 'react-router-dom';
import logo from '../../imagenes/logo.jpg';


const Login = () => {
    return (

        <body className="container">
            <div className="row mt-5 align-items-end">

                <div className="col-sm-5">
                    <img className="img-fluid" src={logo} width="550px" />
                </div>

                <div className="col-sm-4 ">
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
                                <br />
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
