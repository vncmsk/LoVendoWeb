import axios from 'axios';

export const obtenerVentas = async (succesCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/ventas/'
    };
    await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const crearVenta = async (data, succesCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas/',
        headers: { 'content-type': 'application/json' },
        data
    };
    await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, succesCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json' },
        data
    };
    await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const deleteVenta = async (id, data, succesCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json' },
        data
    };
    await axios.request(options).then(succesCallback).catch(errorCallback);
};

export const obtenerVendedores = async (succesCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/vendedores/'
    };
    await axios.request(options).then(succesCallback).catch(errorCallback);
};
