import axios from 'axios';

const getToken = () => {
	return `Bearer ${localStorage.getItem('token')}`;
}

export const obtenerVentas = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'https://secure-temple-56244.herokuapp.com/ventas/',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const crearVenta = async (data, succesCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url: 'https://secure-temple-56244.herokuapp.com/ventas/',
		headers: { 'content-type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `https://secure-temple-56244.herokuapp.com/ventas/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const deleteVenta = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `https://secure-temple-56244.herokuapp.com/ventas/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const obtenerUsuarios = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'https://secure-temple-56244.herokuapp.com/usuarios/self',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const getUsuarios = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'https://secure-temple-56244.herokuapp.com/usuarios/',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `https://secure-temple-56244.herokuapp.com/usuarios/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const obtenerProductos = async (succesCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'https://secure-temple-56244.herokuapp.com/productos/',
		headers: { Authorization: getToken() },
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const crearProductos = async (data, succesCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url: 'https://secure-temple-56244.herokuapp.com/productos/',
		headers: { 'content-type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const editarProductos = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `https://secure-temple-56244.herokuapp.com/productos/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const deleteProductos = async (id, data, succesCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `https://secure-temple-56244.herokuapp.com/productos/${id}/`,
		headers: { 'Content-Type': 'application/json', Authorization: getToken() },
		data
	};
	await axios.request(options).then(succesCallback).catch(errorCallback);
};