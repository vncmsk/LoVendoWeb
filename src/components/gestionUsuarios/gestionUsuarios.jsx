import React from 'react'
import { Link } from 'react-router-dom'

const gestionUsuarios = () => {
    return (
        <body>

            <header>
                <div />
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                    <a className="navbar-brand " href="#">
                        <h3>LoVendo.com</h3>
                    </a>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Inicio</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/reporte'>Reporte de ventas</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/vendedores'>Vendedores</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/usuarios'>Usuarios</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <br />

                <div
                    className="p-2 border w-75 m-auto p-3 mb-2 bg-warning text-black mt-6 d-xl-block d-lg-block d-sm-none text-center">
                    <h1>Gestion de Usuarios</h1>
                </div>

            </header>

            <div className="container w-75 p-3 border border-secondary">

                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col">
                            <select className="seleccionarCiudad" id="inputGroupSelect01">
                                <option selected>Seleccione un vendedor...</option>
                                <option value="1">Andres</option>
                                <option value="2">Lina</option>
                                <option value="3">Maria</option>
                            </select>
                        </div>

                        <div className="col">
                            <button type="button" className="btn btn-warning">Buscar</button>
                            <button type="button" className="btn btn-warning">Agregar</button>
                            <button type="button" className="btn btn-warning">Eliminar</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container w-75 p-3 border border-secondary" />
            <p>nombre:</p>
            <p>apellido:</p>
            <hr />
            <p>Fecha de nacimiento:</p>
            <p>edad:</p>
            <p>cedula:</p>
            <p>Teléfono:</p>
            <p>Correo electrónico:</p>
            <hr />
            <p>Cargo:</p>
            <p>Fecha de contratación:</p>

            <div />

        </body>

    );
}

export default gestionUsuarios;