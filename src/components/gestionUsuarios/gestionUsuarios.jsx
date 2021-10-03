import React from 'react'

import { Link } from 'react-router-dom'

const gestionUsuarios = () => {
    return (
        <body>
            <header>
                <div>
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
                </div>

                <br />

                <div
                    className="p-2 border w-75 m-auto p-3 mb-2 bg-warning text-black mt-6 d-xl-block d-lg-block d-sm-none text-center">
                    <h1>Gestion de Usuarios</h1>
                </div>

            </header>

            <div className="container w-75 p-3 border border-secondary">

                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-xl">
                            <select className="form-select form-select-lg mb-3">
                                <option selected>Seleccione un usuario...</option>
                                <option value="1">Andres</option>
                                <option value="2">Lina</option>
                                <option value="3">Maria</option>
                            </select>
                        </div>

                        <div className="col col-lg-2">
                            <button type="button" className="btn-lg btn-warning">Buscar</button>
                        </div>

                        <div className="col col-lg-2">
                            <button type="button" className="btn-lg btn-warning">Agregar</button>
                        </div>
                        
                        <div className="col col-lg-2">
                            <button type="button" className="btn-lg btn-warning">Eliminar</button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="container w-75 p-3 border border-secondary">

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="ID" className="col-form-label">Documento identidad:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="number" id="ID" className="form-control"/>
                    </div>
                </div>

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="Nombre" className="col-form-label">Nombre:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="text" id="nombre" className="form-control"/>
                    </div>
                </div>

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="Apellido" className="col-form-label">Apellido:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="text" id="nombre" className="form-control"/>
                    </div>
                </div>
           
                <hr />

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="Apellido" className="col-form-label">Fecha de nacimiento:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="date" id="nombre" className="form-control"/>
                    </div>
                </div>

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="ID" className="col-form-label">Edad:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="number" id="ID" className="form-control"/>
                    </div>
                </div>

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="ID" className="col-form-label">Telefono:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="number" id="ID" className="form-control"/>
                    </div>
                </div>
                
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="email" className="col-form-label">Correo electronico:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="email" id="email" className="form-control"/>
                    </div>
                </div>               

                <hr />

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="cargo" className="col-form-label">Cargo:</label>
                    </div>
                    <div className="col">
                            <select className="seleccionarCiudad" id="cargo">
                                <option selected>Seleccione un cargo...</option>
                                <option value="1">Administrador</option>
                                <option value="2">Supervisor</option>
                                <option value="3">Vendedor</option>
                                <option value="4">Almacenista</option>
                            </select>
                        </div>
                </div>

                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="contrato" className="col-form-label">Fecha de contratacion:</label>
                    </div>
                    <div className="col-auto w-75">
                        <input type="date" id="contrato" className="form-control"/>
                    </div>
                </div>

            </div>

        </body>

    );
}

export default gestionUsuarios;