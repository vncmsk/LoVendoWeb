import React from 'react'
import { useUser } from '../../context/usercontext';

const PrivateRoute = ({ roleList, children }) => {
	const { userData } = useUser();

	if (roleList.includes(userData.rol)) {
		return children;
	}

	return (
		<div className="m-0 vh-100 row align-items-center justify-content-center">
			<div className="col-auto align-self-center">
				<h4>No tienes permisos para acceder a este contenido</h4>
			</div>
		</div>
	)
};

export default PrivateRoute