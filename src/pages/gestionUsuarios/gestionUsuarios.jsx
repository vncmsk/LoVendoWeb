import React, { useEffect, useState } from 'react'
import { editarUsuario, getUsuarios } from '../../utils/api';
import PrivateComp from '../../components/privatecomp/PrivateComp';
import { nanoid } from 'nanoid';

const GestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      await getUsuarios(
        (respuesta) => {
          console.log('usuarios', respuesta.data);
          setUsuarios(respuesta.data);
        },
        (err) => {
          console.log(err);
        }
      );
    };
    fetchUsuarios();
  }, []);

  return (
    <div>

      <div className="p-2 border w-75 mt-2 m-auto p-3 mb-2 bg-warning text-black 
				mt-6 d-xl-block d-lg-block d-sm-none text-center">
        <h1>Gestión de usuarios</h1>
      </div>

      <PrivateComp roleList={['admin']}>
        <div className="container W 60% p-1 border border-secondary my-2 border-4">
          <div className="card-deck row justify-content-center">
            {usuarios.map((user) => {
              return (
                <div key={nanoid()} className="card mx-1 mt-1 w-25 bg-dark">
                  <div className="card-header bg-light my-2">
                    <div className="card-header bg-warning text-black my-1">
                      <h5>{user.name}</h5>
                    </div>
                    <img className="" width="90px" src={user.picture} alt="userpicture" />
                    <h5>E-Mail: </h5>{user.email}
                    <h5>Estado: </h5><AceptarRechazar user={user} />
                    <h5>Rol: </h5><Roles user={user} />
                  </div>
                </div>
              );
            })}
          </div>
        </div >
      </PrivateComp>
      
    </div >
  );
};

const Roles = ({ user }) => {
  const [rol, setRol] = useState(user.rol);

  useEffect(() => {
    const editUsuario = async () => {
      await editarUsuario(
        user._id,
        { rol },
        (res) => {
          console.log(res);
        },
        (err) => {
          console.error(err);
        }
      );
    };
    if (user.rol !== rol) {
      editUsuario();
    }
  }, [rol, user]);
  return (
    <select className="bg-dark text-white w-100" value={rol} onChange={(e) => setRol(e.target.value)}>
      <option value='' disabled>Seleccione un rol</option>
      <option value='admin'>Administrador</option>
      <option value='vendedor'>Vendedor</option>
      <option value='sin rol'>Sin rol</option>
    </select>
  );
};

const AceptarRechazar = ({ user }) => {
  const [estado, setEstado] = useState(user.estado);

  useEffect(() => {
    const editUsuario = async () => {
      await editarUsuario(
        user._id,
        { estado },
        (res) => {
          console.log(res);
        },
        (err) => {
          console.error(err);
        }
      );
    };
    if (user.estado !== estado) {
      editUsuario();
    }
  }, [estado, user]);

  return (
    <select className="bg-dark text-white w-100" value={estado} onChange={(e) => setEstado(e.target.value)}>
      <option value='' disabled>Seleccione un estado</option>
      <option className="bg-warning text-black" value='pendiente'>Pendiente</option>
      <option className="bg-danger text-black" value='rechazado'>Rechazado</option>
      <option className="bg-success text-black" value='aprobado'>Aprobado</option>
    </select>
  );
}

export default GestionUsuarios;
