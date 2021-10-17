import React, { useEffect, useState, useRef } from 'react'
import Header from '../../components/encabezado/encabezado';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ventasBack = [
    {
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Item: "Gorra RedBull, Navy",
        Cantidad: 100,
        VrUnit: 7000,
        Vendedor: "Lina Cuartas",
        Ciudad: "Bogota",
        Estado: "Enviado"
    },
    {
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Item: "Gorra RedBull, Navy",
        Cantidad: 100,
        VrUnit: 7000,
        Vendedor: "Lina Cuartas",
        Ciudad: "Bogota",
        Estado: "Enviado"
    },
    {
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Item: "Gorra RedBull, Navy",
        Cantidad: 100,
        VrUnit: 7000,
        Vendedor: "Lina Cuartas",
        Ciudad: "Bogota",
        Estado: "Enviado"
    },
    {
        Fecha: "1/1/2021",
        Cliente: "Andres Rincon",
        Item: "Gorra RedBull, Red",
        Cantidad: 100,
        VrUnit: 7000,
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
            <RegistroVentas agregarVenta={setVentas} listaVentas={ventas} />
            <ConsultaVentas />
            <TablaVentas listaVentas={ventas} />
            <ToastContainer position="bottom-center" autoClose={2000} />
        </div>
    );
};

const RegistroVentas = ({ agregarVenta, listaVentas }) => {

    const form = useRef(null);

    const submitFormulario = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const EnviarAlBack = {};
        fd.forEach((value, key) => {
            EnviarAlBack[key] = value;
        });
        
        agregarVenta ([...listaVentas, EnviarAlBack])
        toast.success('Venta registrada exitosamente')
        toast.error('Error, venta no registrada')
    };

    return (
        <div className="container p-2 border border-secondary border-4 my-3">
            <label className="d-flex text-light fs-6 bg-dark">Registro de ventas</label>
            <form ref={form} className='row row-cols-5' onSubmit={submitFormulario}>
                <input required type="date" className="mx-4 mt-1" name='Fecha' placeholder="fecha de venta" />
                <select required className="Vendedor mx-4 mt-1" name='Vendedor' id="inputGroupSelect01">
                    <option defaultValue>Seleccione un vendedor...</option>
                    <option value="Andres">Andres</option>
                    <option value="Lina">Lina</option>
                    <option value="Maria">Maria</option>
                </select>
                <input required className="Articulo mx-4 mt-1" name='Item' type="text" placeholder="Articulo" />
                <input required className="Articulo mx-4 mt-1" name='Cliente' type="text" placeholder="Cliente" />
                <select required className="seleccionarCiudad mx-4 mt-1" name='Ciudad' id="inputGroupSelect01">
                    <option defaultValue>Seleccione una ciudad...</option>
                    <option value="Bogota">Bogotá</option>
                    <option value="San Andres">San Andres</option>
                    <option value="Medellin">Medellin</option>
                </select>
                <select required className="seleccionarEstado mx-4 my-1" name='Estado' id="inputGroupSelect01">
                    <option defaultValue>Seleccione estado...</option>
                    <option value="Solicitado">Solicitado</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Entregado">Entregado</option>
                </select>
                <input required className="mx-4 my-1" type="number" name='Cantidad' placeholder="Cantidad" />
                <input required className="mx-4 my-1" type="number" name='VrUnit' placeholder="valor" />
                <button type="submit" className='bg-warning mx-4 mt-4'>Registrar venta</button>
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
                        <th scope="col ">Fecha</th>
                        <th scope="col ">Cliente</th>
                        <th scope="col ">Item</th>
                        <th scope="col ">Cantidad</th>
                        <th scope="col ">Vr. Unit</th>
                        <th scope="col ">Vendedor</th>
                        <th scope="col ">Ciudad</th>
                        <th scope="col ">Estado Pedido</th>
                    </tr>
                </thead>

                <tbody>
                    {listaVentas.map((ventas) => {
                        return (
                            <tr key={ventas.No}>
                                <td>{ventas.Fecha}</td>
                                <td>{ventas.Cliente}</td>
                                <td>{ventas.Item}</td>
                                <td>{ventas.Cantidad}</td>
                                <td>${ventas.VrUnit}</td>
                                <td>{ventas.Vendedor}</td>
                                <td>{ventas.Ciudad}</td>
                                <td>{ventas.Estado}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default ReporteVentas;
