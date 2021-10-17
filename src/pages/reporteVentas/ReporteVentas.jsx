import React, { useEffect, useState } from 'react'
import Header from '../../components/encabezado/encabezado';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ventasBack = [
    {
        No: 1,
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Cod: "A0001",
        Item: "Gorra RedBull, Navy",
        Cantidad: 100,
        VrUnit: 7000,
        VrTotal: 70000000,
        Vendedor: "Lina Cuartas",
        Ciudad: "Bogota",
        Estado: "Enviado"
    },
    {
        No: 2,
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Cod: "A0001",
        Item: "Gorra RedBull, Navy",
        Cantidad: 100,
        VrUnit: 7000,
        VrTotal: 70000000,
        Vendedor: "Lina Cuartas",
        Ciudad: "Bogota",
        Estado: "Enviado"
    },
    {
        No: 3,
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Cod: "A0001",
        Item: "Gorra RedBull, Navy",
        Cantidad: 100,
        VrUnit: 7000,
        VrTotal: 70000000,
        Vendedor: "Lina Cuartas",
        Ciudad: "Bogota",
        Estado: "Enviado"
    },
    {
        No: 4,
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Cod: "A0001",
        Item: "Gorra RedBull, Red",
        Cantidad: 100,
        VrUnit: 7000,
        VrTotal: 70000000,
        Vendedor: "Lina Cuartas",
        Ciudad: "San andres",
        Estado: "Enviado"
    },
]

const ReporteVentas = () => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        setVentas(ventasBack);
    }, [])

    return (
        <div>
            <header>
                <Header />
                <div className="p-2 border w-75 mt-2 m-auto p-3 mb-2 bg-warning text-black mt-6 d-xl-block d-lg-block d-sm-none text-center">
                    <h1>Gestión de ventas</h1>
                </div>
            </header>
            <RegistroVentas />
            <ConsultaVentas />
            <TablaVentas listaVentas={ventas} />
        </div>
    );
}

const RegistroVentas = () => {

    const [nombre, SetNombre] = useState("")

    const EnviarAlBack = () => {
        console.log('variable:', nombre);
        <span>saquelo</span>
    };

    return (
        <div className="container p-2 border border-secondary border-4 my-3">
            <label className="d-flex text-light fs-6 bg-dark">Registro de ventas</label>
            <form className='row row-cols-5'>
                <input type="date" className="mx-4 mt-1" name='fecha' onChange={(e) => { console.log("nombre: ", e.target.value) }} placeholder="fecha de venta" />
                <select className="Vendedor mx-4 mt-1" name='vendedor' onChange={(e) => { console.log("nombre: ", e.target.value) }} id="inputGroupSelect01">
                    <option defaultValue>Seleccione un vendedor...</option>
                    <option value="Andres">Andres</option>
                    <option value="Lina">Lina</option>
                    <option value="Maria">Maria</option>
                </select>
                <input className="Articulo mx-4 mt-1" onChange={(e) => { SetNombre(e.target.value) }} name='articulo' type="text" placeholder="Articulo" />
                <select className="seleccionarCiudad mx-4 mt-1" id="inputGroupSelect01">
                    <option name='ciudad' defaultValue>Seleccione una ciudad...</option>
                    <option value="1">San Andres</option>
                    <option value="2">Medellin</option>
                    <option value="3">Bogotá</option>
                </select>
                <select className="seleccionarEstado mx-4 my-1" name='estado' id="inputGroupSelect01">
                    <option defaultValue>Seleccione estado...</option>
                    <option value="1">Solicitado</option>
                    <option value="2">Enviado</option>
                    <option value="3">Entregado</option>
                </select>
                <input className="mx-4 my-1" type="number" name='cantidad' placeholder="Cantidad" />
                <input className="mx-4 my-1" type="number" name='valor' placeholder="valor" />
                <button type="button" onClick={EnviarAlBack} className='bg-warning mx-4 my-1'>Registrar venta</button>
            </form>
        </div>
    );
};

const ConsultaVentas = () => {
    return (
        <div className="container p-2 border border-secondary border-4">
            <label className="d-flex text-light fs-6 bg-dark">Consulta de ventas</label>
            <form className="row align-items-center">

                <div className="col">
                    <label htmlFor="fecha1">Fecha inicial: </label>
                    <input id="fechaInicial" name='fechaInicial' type="date" />
                </div>

                <div className="col">
                    <label htmlFor="fecha2">Fecha final: </label>
                    <input id="fechaFinal" name='fechaFinal' type="date" />
                </div>

                <div className="col">
                    <select defaultValue className="Estado" name='estado' id="inputGroupSelect01">
                        <option defaultValue>Seleccione un estado...</option>
                        <option value="1">Solicitado</option>
                        <option value="2">Enviado</option>
                        <option value="3">Entregado</option>
                    </select>
                </div>

                <div className="col">
                    <select className="Vendedor" name='vendedor' id="inputGroupSelect01">
                        <option defaultValue>Seleccione un vendedor...</option>
                        <option value="1">Andres</option>
                        <option value="2">Lina</option>
                        <option value="3">Maria</option>
                    </select>
                </div>

                <div className="col">
                    <select className="seleccionarCiudad" name='ciudad' id="inputGroupSelect01">
                        <option defaultValue>Seleccione una ciudad...</option>
                        <option value="1">San Andres</option>
                        <option value="2">Medellin</option>
                        <option value="3">Bogotá</option>
                    </select>
                </div>

                <div className="col">
                    <button type="button" className="bg-warning">Buscar</button>
                </div>
            </form>
        </div>
    );
};

const TablaVentas = ({ listaVentas }) => {

    return (
        <div className="container W 60% p-2 border border-secondary my-3 border-4">
            <table className="col-12 col-md-4 col-md-4 col-lg-4 justify-content-center table table-striped table-dark">

                <thead>
                    <tr className="text-center">
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
                    {listaVentas.map((ventas) => {
                        return (
                            <tr key={ventas.No}>
                            <td>{ventas.No}</td>
                            <td>{ventas.Fecha}</td>
                            <td>{ventas.Cliente}</td>
                            <td>{ventas.Cod}</td>
                            <td>{ventas.Item}</td>
                            <td>{ventas.Cantidad}</td>
                            <td>${ventas.VrUnit}</td>
                            <td>${ventas.VrTotal}</td>
                            <td>{ventas.Vendedor}</td>
                            <td>{ventas.Ciudad}</td>
                            <td>{ventas.Estado}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
};

export default ReporteVentas;
