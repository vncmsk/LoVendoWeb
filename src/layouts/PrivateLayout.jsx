import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerUsuarios } from '../utils/api';
import ReactLoading from 'react-loading';
import { useUser } from '../context/usercontext';
import Header from '../components/encabezado/encabezado';

const PrivateLayout = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
  const [loadUserToken, setLoadUserToken] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      setLoadUserToken(true);
      const accesToken = await getAccessTokenSilently({
        audience: 'https://lovendo.us.auth0.com/api/v2/',
      });
      localStorage.setItem('token', accesToken);
      await obtenerUsuarios((response) => {
        console.log('otro', response);
        setUserData(response.data);
        setLoadUserToken(false);
      },
        (err) => {
          console.log('error', err)
          setLoadUserToken(false);
          logout({ returnTo: 'https://tranquil-tundra-14749.herokuapp.com/login' })
        });
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, setUserData, logout]);

  if (isLoading || loadUserToken) return (
    <div className="m-0 vh-100 row align-items-center justify-content-center">
      <div className="col-auto align-self-end">
        <h4>Loading...</h4>
        <ReactLoading type='bars' color='#ffA500' height={400} width={100} />
      </div>
    </div>
  )
  if (!isAuthenticated) {
    return loginWithRedirect();
  } else {
    return (
      <div className="w-screen h-screen">
        <Header />
        <main className='flex w-full  overflow-y-scroll items-center justify-center'>
          {children}
        </main>
      </div>
    )
  };
}


export default PrivateLayout
