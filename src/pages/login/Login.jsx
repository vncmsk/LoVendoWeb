import React from 'react';
import PieDePagina from '../../components/footer/footer';
import logo from '../../imagenes/logo.jpg';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <div className="row bg-black">
                <div className="col-2">
                </div>
                <div className="row col-sm-8 align-items-center">
                    <img src={logo} width="100px" alt="Logo" />
                </div>
                <div className="col-2 align-self-star align-items-end p-3">
                    <button onClick={() => loginWithRedirect('/perfil')} className="w-100 btn btn-warning">
                        Inicio de sesión</button>
                </div>
                <PieDePagina />
            </div>
        </div>
    );
}

export default Login;
