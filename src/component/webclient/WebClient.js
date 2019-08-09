import "isomorphic-fetch";

/**
 * make a simple GET request to the specified endpoint
 * @param endpoint the api URL to be call
 * @return Promise<Response | never>
 * */
export const makeGetRequest = (endpoint) => {
    return fetch(endpoint, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(handleResponse);
};
export const makePostRequest = (endpoint, body) => {
    return fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(handleResponse);
};

export const handleResponse = response => {
    return response.json().then(json => {
        if (!response.ok) {
            console.debug("handleResponse: fail: ");
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
        console.debug("handleResponse: success: ");
        return json;
    });
};

/**
 * handle exception
 * */
export const handleException = (name, endpoint, error) => {
	console.error("handleException: " + error);
};
