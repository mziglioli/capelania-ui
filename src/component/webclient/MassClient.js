import "isomorphic-fetch";
const webClient = require("./WebClient");

export const getPublic = () => {
    console.info("getAll");
    return webClient.makeGetRequest("/public/mass/");
};
export const getAll = () => {
    console.info("getAll");
	return webClient.makeGetRequest("/mass/all");
};
export const getByPage = (page, size) => {
    console.info("getByPage");
    return webClient.makeGetRequest("/mass/filter?page="+page+"&size="+size);
};
export const add = (mass) => {
    console.info("update mass: " + JSON.stringify(mass));
    return webClient.makePostRequest("/mass/add", mass);
};
export const update = (mass) => {
    console.info("update mass: " + JSON.stringify(mass));
    return webClient.makePutRequest("/mass/update", mass);
};
export const remove = (mass) => {
    console.info("remove mass: " + mass.id);
    return webClient.makeDeleteRequest("/mass/delete/"+mass.id);
};
