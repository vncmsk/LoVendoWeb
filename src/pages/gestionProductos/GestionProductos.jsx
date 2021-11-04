import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { crearProductos, obtenerProductos, editarProductos, deleteProductos } from '../../utils/api';
import PrivateComp from '../../components/privatecomp/PrivateComp'

const GestionProductos = ({ children }) => {

  const [productos, setProductos] = useState([]);
  const [actualizar, setActualizar] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
          setActualizar(false);
        },
        (error) => {
          console.error(error);
        });
    }
    if (actualizar) {
      fetchProductos();
      setActualizar(false);
    }
  }, [actualizar]);

  return (
    <div>
      <div className="p-2 border w-75 mt-2 m-auto p-3 mb-2 bg-warning text-black 
				mt-6 d-xl-block d-lg-block d-sm-none text-center">
        <h1>Gestión Productos</h1>
      </div>
      <RegistroProductos setActualizar={setActualizar} actualizar={actualizar} />
      <TablaProductos listaProductos={productos} setActualizar={setActualizar} />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
};

const RegistroProductos = ({ setActualizar, actualizar }) => {

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
      Item: EnviarAlBack.Item,
      Cantidad: EnviarAlBack.Cantidad,
      VrUnit: EnviarAlBack.VrUnit,
      Estado: EnviarAlBack.Estado
    };

    await crearProductos(infoRelacional,
      (response) => {
        console.log(response.data);
        toast.warn('Producto registrado exitosamente')
        setActualizar(true);
      }, (error) => {
        console.error(error);
        toast.error('Error, productos no registrado')
      }
    );
  };

  return (
    <div className="container p-2 border border-secondary border-4 my-2">
      <label className="d-flex text-light fs-6 bg-dark">Registro de productos</label>

      <form ref={form} className='row row-cols-5' onSubmit={submitFormulario}>
        <input required type="date" className="mx-4 mt-1" name='Fecha' placeholder="fecha de venta" />
        <input required className="Articulo mx-4 mt-1" name='Item' type="text" placeholder="Articulo" />
        <input required className="mx-4 my-1" type="number" name='Cantidad' placeholder="Cantidad" min="0" max="9999" />
        <input required className="mx-4 my-1" type="number" name='VrUnit' placeholder="Valor unitario" min="0" />
        <button type="submit" className='bg-warning mx-4 mt-2'>Registrar producto</button>
        <button type="reset" className='bg-warning mx-4 mt-2'>Limpiar</button>
      </form>

    </div>
  );
};

const TablaProductos = ({ listaProductos, setActualizar }) => {

  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

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
              <th>Item</th>
              <th>Cant.</th>
              <th>Vr.Unit</th>
              <PrivateComp roleList={['admin']}>
                <th>Opciones</th>
              </PrivateComp>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((productos) => {
              return (
                <EditarEliminar key={nanoid()} productos={productos} setActualizar={setActualizar} />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
};

const EditarEliminar = ({ productos, setActualizar, actualizar }) => {

  const [editar, setEditar] = useState(false);
  const [datosNuevo, setDatosNuevo] = useState({
    Item: productos.Item,
    Cantidad: productos.Cantidad,
    VrUnit: productos.VrUnit,
  });

  const actuaRelacional = {
    Item: datosNuevo.Item,
    Cantidad: datosNuevo.Cantidad,
    VrUnit: datosNuevo.VrUnit,
  };

  const actualizaProductos = async () => {
    await editarProductos(productos._id, actuaRelacional, (response) => {
      console.log(response.data);
      toast.warn('Producto actualizado con éxito');
      setEditar(false);
      setActualizar(true);
    }, (error) => {
      toast.error('Error modificando el producto');
      console.error(error);
    })
  };

  const eliminarProductos = async () => {
    await deleteProductos(productos._id, datosNuevo, (response) => {
      console.log(response.data);
      toast.warn('Producto eliminado con éxito');
      setActualizar(true);
    }, (error) => {
      toast.error('Error eliminando el producto');
      console.error(error);
    });
  };

  return (
    <tr>
      {editar ? (
        <>
          <td className="align-middle">{productos._id.slice(20)}</td>
          <td className="align-middle w-25 text-center">{productos.Fecha}</td>
          <td className="align-middle"><input className="w-20" name='Item' value={datosNuevo.Item}
            onChange={(e) => setDatosNuevo({ ...datosNuevo, Item: e.target.value })}
          /></td>
          <td className="align-middle"><input className="input-group input-group-sm mb-1 text-center"
            min="0" max="9999" type="number" value={datosNuevo.Cantidad}
            onChange={(e) => setDatosNuevo({ ...datosNuevo, Cantidad: e.target.value })}
          /></td>
          <td className="align-middle"><input className="input-group input-group-sm mb-1" type="number"
            min="0" value={datosNuevo.VrUnit}
            onChange={(e) => setDatosNuevo({ ...datosNuevo, VrUnit: e.target.value })}
          /></td>
        </>
      ) : (
        <>
          <td className="align-middle text-center">{productos._id.slice(21)}</td>
          <td className="align-middle text-center">{productos.Fecha}</td>
          <td className="align-middle">{productos.Item}</td>
          <td className="align-middle text-center">{productos.Cantidad}</td>
          <td className="align-middle">${productos.VrUnit}</td>
        </>
      )}
      <PrivateComp roleList={['admin']}>
        <td className="wd-50 align-middle text-start">
          <div className='row row-cols-2'>
            {editar ? (
              <>
                <i onClick={() => actualizaProductos()} className='fas fa-check'
                  data-toggle="tooltip" data-placement="bottom" title="Guardar cambios" />
                <i onClick={() => setEditar(!editar)} className='far fa-times-circle'
                  data-toggle="tooltip" data-placement="bottom" title="Cancelar edicion" />
              </>
            ) : (
              <>
                <i onClick={() => setEditar(!editar)} className='fas fa-pen-square'
                  data-toggle="tooltip" data-placement="bottom" title="Editar" />
                <i onClick={() => eliminarProductos()} className="fas fa-trash-alt"
                  data-toggle="tooltip" data-placement="bottom" title="Eliminar venta" />
              </>
            )}
          </div>
        </td>
      </PrivateComp>
    </tr>
  );
};

export default GestionProductos;
