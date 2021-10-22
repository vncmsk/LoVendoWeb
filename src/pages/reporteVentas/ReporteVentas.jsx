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
            <RegistroVentas setActualizar={setActualizar} actualizar={actualizar} />
            <TablaVentas listaVentas={venta} setActualizar={setActualizar} />
            <ToastContainer position="bottom-center" autoClose={2000} />
        </div>
    );
};

const RegistroVentas = ({ setActualizar, actualizar }) => {

    const [vendedores, setVendedores] = useState([]);

    useEffect(() => {
        const obtenerVendedores = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/vendedores' };
            axios.request(options).then(function (response) {
                setVendedores(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };

        obtenerVendedores();
    }, [actualizar]);

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
        <div className="container p-2 border border-secondary border-4 my-2">
            <label className="d-flex text-light fs-6 bg-dark">Registro de ventas</label>
            <form ref={form} className='row row-cols-5' onSubmit={submitFormulario}>
                <input required type="date" className="mx-4 mt-1" name='Fecha' placeholder="fecha de venta" />
                <select required className="Vendedor mx-4 mt-1" name='Vendedor' id="inputGroupSelect01">
                    <option defaultValue>Seleccione un vendedor...</option>
                    {vendedores.map((v) => {
                        return (
                            <option key={nanoid()}>{v.nombre}</option>
                        )
                    })}
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
                <button type="submit" className='bg-warning mx-4 mt-2'>Registrar venta</button>
                <button type="reset" className='bg-warning mx-4 mt-2'>Limpiar</button>
            </form>
        </div>
    );
};

const TablaVentas = ({ listaVentas, setActualizar }) => {

    const [busqueda, setBusqueda] = useState("");
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

    useEffect(() => {
        setVentasFiltradas(
            listaVentas.filter((elemento) => {
                return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
            })
        );
    }, [busqueda, listaVentas]);

    return (
        <>
            <div className="container p-1 border border-secondary my-1 border-3">
                <div>
                    <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
                        className="mx-3" placeHolder="Buscar">
                    </input>
                </div>
            </div>
            <div className="container W 60% p-1 border border-secondary my-2 border-4">

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
                            <th scope="col ">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventasFiltradas.map((venta) => {
                            return (
                                <EditarEliminar key={nanoid()} venta={venta} setActualizar={setActualizar} />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
};

const EditarEliminar = ({ venta, setActualizar, actualizar }) => {

    const [editar, setEditar] = useState(false);
    const [vendedores, setVendedores] = useState([]);
    const [datosNuevo, setDatosNuevo] = useState({
        Cliente: venta.Cliente,
        Item: venta.Item,
        Cantidad: venta.Cantidad,
        VrUnit: venta.VrUnit,
        Vendedor: venta.Vendedor,
        Ciudad: venta.Ciudad,
        Estado: venta.Estado,
    });

    useEffect(() => {
        const obtenerVendedores = async () => {
            const options = { method: 'GET', url: 'http://localhost:5000/vendedores' };
            axios.request(options).then(function (response) {
                setVendedores(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        };

        obtenerVendedores();
    }, [actualizar]);

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
                    <td className="align-middle">{venta._id.slice(20)}</td>
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
                        onChange={(e) => setDatosNuevo({ ...datosNuevo, Vendedor: e.target.value })}>
                        <option value>{datosNuevo.Vendedor}</option>
                        {vendedores.map((v) => {
                            return (
                                <option key={nanoid()}>{v.nombre}</option>
                            )
                        })}
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
                    <td className="align-middle text-center">{venta._id.slice(21)}</td>
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
            <td className="wd-50 align-middle text-start">
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
            </td>
        </tr>
    );
};

export default ReporteVentas;
