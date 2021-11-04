import { useAuth0 } from "@auth0/auth0-react";
import PrivateComp from '../../components/privatecomp/PrivateComp'

function PerfilUsuario() {
  const { user } = useAuth0();

  return (
    <div className="row align-items-center justify-content-center">

      <h3 className="p-2 w-75 my-4 m-auto p-3 mb-2 text-black 
				d-xl-block d-lg-block d-sm-none text-center">Bienvenid@!</h3>

      <PrivateComp roleList={['admin', 'vendedor']}>
        <div className="card mb-3 w-50">
          <div className="row g-0">
            <div className="bg-dark text-white text-center"><h4 className="card-title">Perfil de usuario</h4></div>
            <div className="col-md-3 align-self-center">
              <img src={user.picture} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-9 bg-warning">
              <div className="card-body">
                <h5 className="card-title">Nombre:</h5>
                <p className="card-text">{user.name}.</p>
                <h5 className="card-title">Nickname:</h5>
                <p className="card-text">{user.nickname}.</p>
                <h5 className="card-title">Email:</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </PrivateComp>
    </div>
  );
}

export default PerfilUsuario;
