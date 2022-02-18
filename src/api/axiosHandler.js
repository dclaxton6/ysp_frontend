import axios from 'axios';

const client = axios.create();


export async function requestHandler(endpoint, method, {data, contentType}={}) {
    console.log('Testing AxiosHandler Method is : ' + method);
    let headers = {}
    if (contentType){
        headers['Content-Type'] = contentType;
    }
    else {
        headers['Content-Type'] = 'text/plain';
    }

    const config = {headers};
    switch (method.toUpperCase()){
        case "GET":
            return await client.get(endpoint, config).catch(errorHandler);
        case "POST":
            return await client.post(endpoint, data, config).catch(errorHandler);
        case "PUT":
            return await client.put(endpoint, data, config).catch(errorHandler);
        case "DELETE":
            return await client.delete(endpoint, config).catch(errorHandler);
        default:
            throw `Argument was out of range: ${method}`
    }

}

/**
 * @param {import('axios').AxiosResponse} response 
 * @returns A parsed version of the response
 */
 const dataUpdater = response => {
    return  {
        data: response.data,
        status: response.status,
        headers: response.headers
    }
}
client.interceptors.response.use(dataUpdater);
/**
 * Handles errors by alerting the client
 * @param {any} error 
 */
 const errorHandler = error => {
    if (error.response){
        let reason = '';
        switch (error.response.status){
            case 401:
                reason = 'This action was not authorized';
                break;
            case 404:
                reason = 'This page was not found';
                break;
            case 400:
                reason = 'You made a malformed request';
                break;
            case 500:
                reason = 'Congrats, you broke it';
                break;
            default:
                reason = 'Servers are down.';
                break;
        }

        throw {
            status: error.response.status,
            reason
        };
    }
    else {
        throw {
            status: 'Null Status',
            reason: 'Servers are down.'
        };
    }
}

