import axios from  'axios';

function getHeaders() {
    return {};
}

function getUrl(relativeUrl) {
    return (process.env.REACT_APP_API_URL + relativeUrl);
}

export function getAsync(url) {
    return axios.get(
        getUrl(url), 
        {
            headers: getHeaders()
        }
    );
}

export function putAsync(url, data) {
    return axios.put(
        getUrl(url), 
        data, 
        {
            headers: getHeaders()
        }
    );
}

export function postAsync(url, data) {
    return axios.post(
        getUrl(url), 
        data, 
        {
            headers: getHeaders()
        }
    );
}