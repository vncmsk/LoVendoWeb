import React, { useEffect, useState, useRef } from 'react'
import Header from '../../components/encabezado/encabezado';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';

const ReporteVentas = () => {

    const [venta, setVenta] = useState([]);

    useEffect(() => {

        const obtenerVentas = async () => {

            const options = { method: 'GET', url: 'http://localhost:5000/ventas' };
            axios.request(options).then(function (response) {
                setVenta(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        obtenerVentas();
    }, [venta])

    return (
        <div>
            <header>
                <Header />
                <div className="p-2 border w-75 mt-2 m-auto p-3 mb-2 bg-warning text-black mt-6 d-xl-block d-lg-block d-sm-none text-center">
                    <h1>Gestión de ventas</h1>
                </div>
            </header>
            <RegistroVentas agregarVenta={setVenta} listaVentas={venta} />
            <ConsultaVentas />
            <TablaVentas listaVentas={venta} />
            <ToastContainer position="bottom-center" autoClose={2000} />
        </div>
    );
};

const RegistroVentas = ({ agregarVenta, listaVentas }) => {

    const form = useRef(null);

    const submitFormulario = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const EnviarAlBack = {};
        fd.forEach((value, key) => {
            EnviarAlBack[key] = value;
        });

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas',
            headers: { 'Content-Type': 'application/json' },
            data: {
                Fecha: EnviarAlBack.Fecha, Cliente: EnviarAlBack.Cliente, Item: EnviarAlBack.Item,
                Cantidad: EnviarAlBack.Cantidad, VrUnit: EnviarAlBack.VrUnit, Vendedor: EnviarAlBack.Vendedor,
                Ciudad: EnviarAlBack.Ciudad, Estado: EnviarAlBack.Estado
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta registrada exitosamente')
        }).catch(function (error) {
            console.error(error);
            toast.error('Error, venta no registrada')
        });
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
                <input required className="Cliente mx-4 mt-1" name='Cliente' type="text" placeholder="Cliente" />
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
                <button type="reset" className='bg-warning mx-4 mt-4'>Limpiar</button>
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
                        <th scope="col ">Cant.</th>
                        <th scope="col ">Vr.Unit</th>
                        <th scope="col ">Vendedor</th>
                        <th scope="col ">Ciudad</th>
                        <th scope="col ">Estado</th>
                        <th scope="col ">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {listaVentas.map((venta) => {
                        return (
                            <EditarEliminar key={nanoid()} venta={venta} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

const EditarEliminar = ({ venta }) => {
    const [editar, setEditar] = useState(false);
    const [datosNuevo, setDatosNuevo] = useState({
        Fecha: venta.Fecha,
        Cliente: venta.Cliente,
        Item: venta.Item,
        Cantidad: venta.Cantidad,
        VrUnit: venta.VrUnit,
        Vendedor: venta.Vendedor,
        Ciudad: venta.Ciudad,
        Estado: venta.Estado,
    });

    const actualizacion = () => {
        console.log(datosNuevo);
    }
    return (
        <tr>
            {editar ? (
                //sino toca solo inputs

                <>
                    <td>{venta.Fecha}</td>
                    <td><input className="col" name='Cliente' type="text" value={datosNuevo.Cliente}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Cliente: e.target.value })}
                    /></td>
                    <td><input className="input-group input-group-sm mb-1" name='Item' type="text" value={datosNuevo.Item}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Item: e.target.value })}
                    /></td>
                    <td><input className="input-group input-group-sm mb-1" type="number" name='Cantidad' value={datosNuevo.Cantidad}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Cantidad: e.target.value })}
                    /></td>
                    <td><input className="input-group input-group-sm mb-1" type="number" name='VrUnit' value={datosNuevo.VrUnit}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, VrUnit: e.target.value })}
                    /></td>
                    <td><select name='Vendedor' id="inputGroupSelect01"
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Item: e.target.Vendedor })}>
                        <option value>{datosNuevo.Vendedor}</option>
                        <option value="Andres">Andres</option>
                        <option value="Lina">Lina</option>
                        <option value="Maria">Maria</option>
                    </select></td>
                    <td><select name='Ciudad' id="inputGroupSelect01"
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Ciudad: e.target.value })}>
                        <option value>{datosNuevo.Ciudad}</option>
                        <option value="Bogota">Bogotá</option>
                        <option value="San Andres">San Andres</option>
                        <option value="Medellin">Medellin</option>
                    </select></td>
                    <td><select name='Estado' id="inputGroupSelect01"
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Estado: e.target.value })}>
                        <option value>{datosNuevo.Estado}</option>
                        <option value="Solicitado">Solicitado</option>
                        <option value="Enviado">Enviado</option>
                        <option value="Entregado">Entregado</option>
                    </select></td>
                </>
            ) : (
                <>
                    <td>{venta.Fecha}</td>
                    <td>{venta.Cliente}</td>
                    <td>{venta.Item}</td>
                    <td>{venta.Cantidad}</td>
                    <td>${venta.VrUnit}</td>
                    <td>{venta.Vendedor}</td>
                    <td>{venta.Ciudad}</td>
                    <td>{venta.Estado}</td>
                </>
            )}
            <td>
                <div className='flex w-full justify-around'>
                    {editar ? (
                        <i onClick ={() => actualizacion()} className="fas fa-check"></i>
                    ) : (
                        <i onClick ={() => setEditar(!editar)} className="fas fa-pen-square"></i>
                    )}
                    <i className="fas fa-trash-alt" />
                </div>
            </td>
        </tr>
    );
};

export default ReporteVentas;
