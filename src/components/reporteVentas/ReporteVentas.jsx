import React from 'react'
import { Link } from 'react-router-dom'


const ReporteVentas = () => {
    return (

        <body>

            <header>

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

                <br/>

                <div className="p-2 border w-75 m-auto p-3 mb-2 bg-warning text-black mt-6 d-xl-block d-lg-block d-sm-none text-center">
                    <h1>Reporte de ventas</h1>
                </div>

            </header>

            <div className="container W 60% p-2 border border-secondary">

                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col">
                            <label for="fecha1">Fecha inicial</label>
                            <input id="fechaInicial" type="date" />
                        </div>

                        <div className="col">
                            <label for="fecha2">Fecha final</label>
                            <input id="fechaFinal" type="date" />
                        </div>

                        <div className="col">
                            <select className="seleccionarCiudad" id="inputGroupSelect01">
                                <option selected>Seleccione un estado...</option>
                                <option value="1">Solicitado</option>
                                <option value="2">En gestion</option>
                                <option value="3">Enviado</option>
                                <option value="4">Entregado</option>
                                <option value="5">OK-Pagado</option>
                            </select>
                        </div>

                    </div>
                </div>
            
            </div>

            <br/>

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
                    <select className="seleccionarCiudad" id="inputGroupSelect01">
                        <option selected>Seleccione una ciudad...</option>
                        <option value="1">San Andres</option>
                        <option value="2">Medellin</option>
                        <option value="3">Bogotá</option>
                    </select>
                </div>

                <div className="col">
                    <button type="button" className="btn btn-warning">Buscar</button>
                </div>

            </div>
            </div>
            

            <br />

            <div className="container W 60% p-2 border border-secondary">
            <table className="col-12 col-md-4 col-md-4 col-lg-4 justify-content-center table table-striped table-dark">

                <thead>

                    <tr ALIGN="CENTER">
                        <th scope="col ">#</th>
                        <th scope="col ">Fecha</th>
                        <th scope="col ">Cliente</th>
                        <th scope="col ">Cod</th>
                        <th scope="col ">Item</th>
                        <th scope="col ">Cantidad</th>
                        <th scope="col ">Vr. Unit</th>
                        <th scope="col ">Vr. Total</th>
                        <th scope="col ">Vendedor</th>
                        <th scope="col ">Ciudad</th>
                        <th scope="col ">Estado Pedido</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <th scope="row">1</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>OK-Pagado</td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>San Andres</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">4</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                    <tr>
                        <th scope="row">5</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                    <tr>
                        <th scope="row">6</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">7</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>OK-Pagado</td>
                    </tr>

                    <tr>
                        <th scope="row">8</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>San Andres</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">9</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                    <tr>
                        <th scope="row">10</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                    <tr>
                        <th scope="row">11</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">12</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>OK-Pagado</td>
                    </tr>

                    <tr>
                        <th scope="row">13</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>San Andres</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">14</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                    <tr>
                        <th scope="row">15</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                    <tr>
                        <th scope="row">16</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">17</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Bogotá</td>
                        <td>OK-Pagado</td>
                    </tr>

                    <tr>
                        <th scope="row">18</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>San Andres</td>
                        <td>Enviado</td>
                    </tr>

                    <tr>
                        <th scope="row">19</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                    <tr>
                        <th scope="row">20</th>
                        <td>1/1/2021</td>
                        <td>Andres Rincon</td>
                        <td>0001</td>
                        <td>Gorra RedBull, Navy</td>
                        <td>1000</td>
                        <td>$70.000</td>
                        <td>$70.000.000</td>
                        <td>Lina Cuartas</td>
                        <td>Medellin</td>
                        <td>Entregado</td>
                    </tr>

                </tbody>

            </table>
            </div>

        </body>

    );
}

export default ReporteVentas;
