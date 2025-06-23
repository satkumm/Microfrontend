import axios from  'axios';
import * as constants from '../../../../constants/env';

function getHeaders() {
    return {};
}

function getUrl(relativeUrl) {
    return (constants.BASE_URL + relativeUrl);
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