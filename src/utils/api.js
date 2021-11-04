import axios from 'axios';

const getToken = () => {
	return `Bearer ${localStorage.getItem('token')}`;
}

export const obtenerVentas = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'http://localhost:5000/ventas/',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const crearVenta = async (data, succesCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url: 'http://localhost:5000/ventas/',
		headers: { 'content-type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `http://localhost:5000/ventas/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const deleteVenta = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `http://localhost:5000/ventas/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const obtenerUsuarios = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'http://localhost:5000/usuarios/self',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const getUsuarios = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'http://localhost:5000/usuarios/',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `http://localhost:5000/usuarios/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const obtenerProductos = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'http://localhost:5000/productos/',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const crearProductos = async (data, succesCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url: 'http://localhost:5000/productos/',
		headers: { 'content-type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const editarProductos = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `http://localhost:5000/productos/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const deleteProductos = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `http://localhost:5000/productos/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};