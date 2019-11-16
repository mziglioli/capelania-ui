import "isomorphic-fetch";

// const baseURL = "http://localhost:5000";
const baseURL = "http://capelania-v2.5ubbtpbhjh.eu-west-2.elasticbeanstalk.com";

export const makeGetRequest = (endpoint) => {
    return fetch(baseURL + endpoint, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(handleResponse);
};
export const makeLoginRequest = (endpoint, body) => {
    return fetch(baseURL +endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(handleResponse);
};
export const makePostRequest = (endpoint, body) => {
    return fetch(baseURL +endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(handleResponse);
};
export const makePutRequest = (endpoint, body) => {
    return fetch(baseURL +endpoint, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(handleResponse);
};
export const makeDeleteRequest = (endpoint, body) => {
    return fetch(baseURL +endpoint, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(handleResponse);
};


export const handleResponse = response => {
    return response.json().then(json => {
        if (!response.ok) {
            console.info("handleResponse: fail: ");
            const error = Object.assign(
                {},
                {
                    data: json,
                    status: response.status,
                    statusText: response.statusText
                }
            );
            return Promise.reject(error);
        }
        console.info("handleResponse: success: ");
        return json;
    }).catch(error => {
        console.info("handleResponse: erron on json: " + error);
        return error;
    });
};

/**
 * handle exception
 * */
export const handleException = (name, endpoint, error) => {
	console.error("handleException: " + error);
};
