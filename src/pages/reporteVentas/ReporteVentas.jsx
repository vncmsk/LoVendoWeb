import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { crearVenta, obtenerVentas, editarVenta, deleteVenta, getUsuarios, obtenerProductos } from '../../utils/api';
import PrivateComp from '../../components/privatecomp/PrivateComp'

const ReporteVentas = ({ children }) => {

	const [venta, setVenta] = useState([]);
	const [actualizar, setActualizar] = useState(true);

	useEffect(() => {
		const fetchVentas = async () => {
			await obtenerVentas(
				(response) => {
					setVenta(response.data);
					setActualizar(false);
				},
				(error) => {
					console.error(error);
				});
		}
		if (actualizar) {
			fetchVentas();
			setActualizar(false);
		}
	}, [actualizar]);

	return (
		<div>
			<div className="p-2 border w-75 mt-2 m-auto p-3 mb-2 bg-warning text-black 
				mt-6 d-xl-block d-lg-block d-sm-none text-center">
				<h1>Gestión de ventas</h1>
			</div>
			<RegistroVentas setActualizar={setActualizar} actualizar={actualizar} />
			<TablaVentas listaVentas={venta} setActualizar={setActualizar} />
			<ToastContainer position="bottom-center" autoClose={2000} />
		</div>
	);
};

const RegistroVentas = ({ setActualizar, actualizar }) => {

	const [vendedores, setVendedores] = useState([]);
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const listVendedores = async () => {
			await getUsuarios(
				(response) => { setVendedores(response.data); },
				(error) => {
					console.error(error);
				}
			);
		};
		listVendedores();
	}, []);

	useEffect(() => {
		const listProductos = async () => {
			await obtenerProductos(
				(response) => { setProductos(response.data); },
				(error) => {
					console.error(error);
				}
			);
		};
		listProductos();
	}, []);

	const form = useRef(null);

	const submitFormulario = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);

		const EnviarAlBack = {};
		fd.forEach((value, key) => {
			EnviarAlBack[key] = value;
		});

		const infoRelacional = {
			Fecha: EnviarAlBack.Fecha,
			Cliente: EnviarAlBack.Cliente,
			Item: productos.filter((v) => v._id === EnviarAlBack.Item)[0],
			Cantidad: EnviarAlBack.Cantidad,
			VrUnit: productos.filter((v) => v._id === EnviarAlBack.VrUnit)[0],
			Vendedor: vendedores.filter((v) => v._id === EnviarAlBack.Vendedor)[0],
			Ciudad: EnviarAlBack.Ciudad,
			Estado: EnviarAlBack.Estado
		};

		await crearVenta(infoRelacional,
			(response) => {
				console.log(response.data);
				toast.warn('Venta registrada exitosamente')
				setActualizar(true);
			}, (error) => {
				console.error(error);
				toast.error('Error, venta no registrada')
			}
		);
	};

	return (
		<div className="container p-2 border border-secondary border-4 my-2">
			<label className="d-flex text-light fs-6 bg-dark">Registro de ventas</label>
			<form ref={form} className='row row-cols-5' onSubmit={submitFormulario}>
				<input required type="date" className="mx-4 mt-1" name='Fecha' placeholder="fecha de venta" />
				<select required className="Vendedor mx-4 mt-1" defaultValue='' name='Vendedor' id="inputGroupSelect01">
					<option value=''>Seleccione un vendedor</option>
					{vendedores.map((v) => {
						return (
							<option key={nanoid()} value={v._id}>{v.name}</option>
						)
					})}
				</select>
				<select required className="Productos mx-4 mt-1" defaultValue='' name='Item' id="inputGroupSelect01">
					<option value=''>Seleccione un producto</option>
					{productos.map((v) => {
						return (
							<option key={nanoid()} value={v._id}>{v.Item}</option>
						)
					})}
				</select>
				<input required className="mx-4 my-1" type="number" name='Cantidad' placeholder="Cantidad" min="1" max="9999" />
				<input required className="Cliente mx-4 mt-1" name='Cliente' type="text" placeholder="Cliente" />
				<select required defaultValue='' className="seleccionarCiudad mx-4 mt-1" name='Ciudad' id="inputGroupSelect01">
					<option value=''>Seleccione una ciudad...</option>
					<option value="Bogota">Bogotá</option>
					<option value="San Andres">San Andres</option>
					<option value="Medellin">Medellin</option>
				</select>
				<select required defaultValue='' className="seleccionarEstado mx-4 mt-1" name='Estado' id="inputGroupSelect01">
					<option value=''>Seleccione estado...</option>
					<option value="Solicitado">Solicitado</option>
					<option value="Enviado">Enviado</option>
					<option value="Entregado">Entregado</option>
				</select>
				<div className='row mx-4'>
					<button type="submit" className='col-xl-5 bg-warning mx-2'>Registrar</button>
					<button type="reset" className='col-xl-5 bg-warning mx-2'>Limpiar</button>
				</div>
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
						className="mx-3" placeholder="Buscar">
					</input>
				</div>
			</div>
			<div className="container W 60% p-1 border border-secondary my-2 border-4">
				<table className="col-12 col-md-4 col-md-4 col-lg-4 justify-content-center table table-striped table-dark">
					<thead>
						<tr className="text-center">
							<th>ID</th>
							<th>Fecha</th>
							<th>Cliente</th>
							<th>Item</th>
							<th>Cant.</th>
							<th>Vr.Unit</th>
							<th>Vendedor</th>
							<th>Ciudad</th>
							<th>Estado</th>
							<PrivateComp roleList={['admin']}>
								<th>Opciones</th>
							</PrivateComp>
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
	const [productos, setProductos] = useState([]);
	const [datosNuevo, setDatosNuevo] = useState({
		Cliente: venta.Cliente,
		Item: venta.Item,
		Cantidad: venta.Cantidad,
		VrUnit: venta.VrUnit,
		Vendedor: venta.Vendedor,
		Ciudad: venta.Ciudad,
		Estado: venta.Estado,
	});

	const actuaRelacional = {
		Cliente: datosNuevo.Cliente,
		Item: productos.filter((v) => v._id === datosNuevo.Item)[0],
		Cantidad: datosNuevo.Cantidad,
		VrUnit: datosNuevo.VrUnit,
		Vendedor: vendedores.filter((v) => v._id === datosNuevo.Vendedor)[0],
		Ciudad: datosNuevo.Ciudad,
		Estado: datosNuevo.Estado
	};

	useEffect(() => {
		getUsuarios(
			(response) => { setVendedores(response.data); },
			(error) => {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		obtenerProductos(
			(response) => { setProductos(response.data); },
			(error) => {
				console.error(error);
			});
	}, []);

	const actualizaVenta = async () => {
		await editarVenta(venta._id, actuaRelacional, (response) => {
			console.log(response.data);
			toast.warn('Venta actualizada con éxito');
			setEditar(false);
			setActualizar(true);
		}, (error) => {
			toast.error('Error modificando la venta');
			console.error(error);
		})
	};

	const eliminarVenta = async () => {
		await deleteVenta(venta._id, datosNuevo, (response) => {
			console.log(response.data);
			toast.warn('Venta eliminada con éxito');
			setActualizar(true);
		}, (error) => {
			toast.error('Error eliminando la venta');
			console.error(error);
		});
	};

	return (
		<tr>
			{editar ? (
				<>
					<td className="align-middle">{venta._id.slice(20)}</td>
					<td className="align-middle w-100 text-center">{venta.Fecha}</td>
					<td className="align-middle"><input className="w-20" name='Cliente' value={datosNuevo.Cliente}
						onChange={(e) => setDatosNuevo({ ...datosNuevo, Cliente: e.target.value })} /></td>

					{/* No renderiza el cambio*/}

					<td className="align-middle"><select id="inputGroupSelectItem"
						onChange={(e) => setDatosNuevo({ ...datosNuevo, Item: e.target.value })}>
						<option value>{datosNuevo.Item.Item}</option>
						{productos.map((v) => {
							return (
								<option key={v._id} value={v._id}>{v.Item}</option>
							)
						})}
					</select></td>


					<td className="align-middle"><input className="input-group input-group-sm mb-1 text-center"
						min="1" max="9999" type="number" value={datosNuevo.Cantidad}
						onChange={(e) => setDatosNuevo({ ...datosNuevo, Cantidad: e.target.value })} /></td>
					<td className="align-middle w-25 text-center">${venta.Item.VrUnit}</td>

					{/* No renderiza el cambio*/}

					<td className="align-middle"><select id="inputGroupSelectVendedor"
						onChange={(e) => setDatosNuevo({ ...datosNuevo, Vendedor: e.target.value })}>
						<option value>{datosNuevo.Vendedor.name}</option>
						{vendedores.map((v) => {
							return (
								<option key={v._id} value={v._id}>{v.name}</option>
							)
						})}
					</select></td>


					<td className="align-middle"><select id="inputGroupSelectCiudad"
						onChange={(e) => setDatosNuevo({ ...datosNuevo, Ciudad: e.target.value })}>
						<option value>{datosNuevo.Ciudad}</option>
						<option value="Bogota">Bogotá</option>
						<option value="San Andres">San Andres</option>
						<option value="Medellin">Medellin</option>
					</select></td>
					<td className="align-middle"><select id="inputGroupSelectEstado"
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
					<td className="align-middle">{venta.Item.Item}</td>
					<td className="align-middle text-center">{venta.Cantidad}</td>
					<td className="align-middle">${venta.Item.VrUnit}</td>
					<td className="align-middle">{venta.Vendedor.name}</td>
					<td className="align-middle">{venta.Ciudad}</td>
					<td className="align-middle">{venta.Estado}</td>
				</>
			)}
			<PrivateComp roleList={['admin']}>
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
			</PrivateComp>
		</tr>
	);
};

export default ReporteVentas;
