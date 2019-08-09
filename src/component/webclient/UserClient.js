import "isomorphic-fetch";
const webClient = require("./WebClient");

export const getAll = () => {
    console.debug("getAll");
	return webClient.makeGetRequest("http://localhost:8089/user/all");
};

export const getById = (id) => {
    console.debug("login");
    return webClient.makeGetRequest("http://localhost:8089/user/" + id);
};
