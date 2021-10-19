import React, { useEffect, useState, useRef } from 'react'
import Header from '../../components/encabezado/encabezado';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';

const ReporteVentas = () => {

    const [venta, setVenta] = useState([]);
    const [actualizar, setActualizar] = useState(true);

    useEffect(() => {
        const obtenerVentas = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/ventas' };
            axios.request(options).then(function (response) {
                setVenta(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };
        if (actualizar) {
            obtenerVentas();
            setActualizar(false);
        };
    }, [actualizar]);

    return (
        <div>
            <header>
                <Header />
                <div className="p-2 border w-75 mt-2 m-auto p-3 mb-2 bg-warning text-black mt-6 d-xl-block d-lg-block d-sm-none text-center">
                    <h1>Gestión de ventas</h1>
                </div>
            </header>
            <RegistroVentas setActualizar={setActualizar} />
            <ConsultaVentas />
            <TablaVentas listaVentas={venta} setActualizar={setActualizar} />
            <ToastContainer position="bottom-center" autoClose={2000} />
        </div>
    );
};

const RegistroVentas = ({ setActualizar }) => {

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
            toast.warn('Venta registrada exitosamente')
            setActualizar(true);
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

const TablaVentas = ({ listaVentas, setActualizar }) => {

    useEffect(() => {

    }, [listaVentas]);

    return (
        <div className="container W 60% p-2 border border-secondary my-3 border-4">
            <table className="col-12 col-md-4 col-md-4 col-lg-4 justify-content-center table table-striped table-dark">
                <thead>
                    <tr className="text-center">
                        <th scope="col ">ID</th>
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
                            <EditarEliminar key={nanoid()} venta={venta} setActualizar={setActualizar} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

const EditarEliminar = ({ venta, setActualizar }) => {

    const [editar, setEditar] = useState(false);
    const [datosNuevo, setDatosNuevo] = useState({
        Cliente: venta.Cliente,
        Item: venta.Item,
        Cantidad: venta.Cantidad,
        VrUnit: venta.VrUnit,
        Vendedor: venta.Vendedor,
        Ciudad: venta.Ciudad,
        Estado: venta.Estado,
    });

    const actualizaVenta = async () => {

        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/ventas/${venta._id}/`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...datosNuevo },
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.warn('Venta actualizada con éxito');
            setEditar(false);
            setActualizar(true);
        })
            .catch(function (error) {
                toast.error('Error modificando la venta');
                console.error(error);
            });
    };

    const eliminarVenta = async () => {

        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/ventas/${venta._id}/`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...datosNuevo },
        };
        await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.warn('Venta eliminada con éxito');
            setActualizar(true);
        })
            .catch(function (error) {
                toast.error('Error eliminando la venta');
                console.error(error);
            });

    };

    return (
        <tr>
            {editar ? (
                <>
                    <td className="align-middle">{venta._id}</td>
                    <td className="align-middle w-50 text-center">{venta.Fecha}</td>
                    <td className="align-middle"><input className="w-20" name='Cliente' value={datosNuevo.Cliente}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Cliente: e.target.value })}
                    /></td>
                    <td className="align-middle"><input className="w-20" name='Item' value={datosNuevo.Item}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Item: e.target.value })}
                    /></td>
                    <td className="align-middle"><input className="input-group input-group-sm mb-1 text-center" type="number" value={datosNuevo.Cantidad}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Cantidad: e.target.value })}
                    /></td>
                    <td className="align-middle"><input className="input-group input-group-sm mb-1" type="number" value={datosNuevo.VrUnit}
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, VrUnit: e.target.value })}
                    /></td>
                    <td className="align-middle"><select id="inputGroupSelect01"
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Item: e.target.Vendedor })}>
                        <option value>{datosNuevo.Vendedor}</option>
                        <option value="Andres">Andres</option>
                        <option value="Lina">Lina</option>
                        <option value="Maria">Maria</option>
                    </select></td>
                    <td className="align-middle"><select id="inputGroupSelect01"
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Ciudad: e.target.value })}>
                        <option value>{datosNuevo.Ciudad}</option>
                        <option value="Bogota">Bogotá</option>
                        <option value="San Andres">San Andres</option>
                        <option value="Medellin">Medellin</option>
                    </select></td>
                    <td className="align-middle"><select id="inputGroupSelect01"
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Estado: e.target.value })}>
                        <option value>{datosNuevo.Estado}</option>
                        <option value="Solicitado">Solicitado</option>
                        <option value="Enviado">Enviado</option>
                        <option value="Entregado">Entregado</option>
                    </select></td>
                </>
            ) : (
                <>
                    <td className="align-middle text-center">{venta._id}</td>
                    <td className="align-middle text-center">{venta.Fecha}</td>
                    <td className="align-middle">{venta.Cliente}</td>
                    <td className="align-middle">{venta.Item}</td>
                    <td className="align-middle text-center">{venta.Cantidad}</td>
                    <td className="align-middle">${venta.VrUnit}</td>
                    <td className="align-middle">{venta.Vendedor}</td>
                    <td className="align-middle">{venta.Ciudad}</td>
                    <td className="align-middle">{venta.Estado}</td>
                </>
            )}
            <td className="align-middle text-center ">
                <div className='row row-cols-2'>
                    {editar ? (
                        <>
                            <i onClick={() => actualizaVenta()} className='fas fa-check'
                                data-toggle="tooltip" data-placement="bottom" title="Guardar cambios" />
                            <i onClick={() => setEditar(!editar)} className='far fa-times-circle'
                                data-toggle="tooltip" data-placement="bottom" title="Cancelar edicion" />
                        </>
                    ) : (
                        <>
                            <i onClick={() => setEditar(!editar)} className='fas fa-pen-square'
                                data-toggle="tooltip" data-placement="bottom" title="Editar" />
                            <i onClick={() => eliminarVenta()} className="fas fa-trash-alt"
                                data-toggle="tooltip" data-placement="bottom" title="Eliminar venta" />
                        </>
                    )}

                </div>
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>¿Esta seguro de eliminar este registro?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Eliminar</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </td>
        </tr>
    );
};

export default ReporteVentas;
