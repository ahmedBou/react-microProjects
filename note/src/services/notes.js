import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    // return axios.get(baseUrl)
    //, instead of the entire HTTP response, we would only get the response data.
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    // return axios.post(baseUrl, newObject)
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    // return axios.put(`${baseUrl}/${id}`, newObject)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}