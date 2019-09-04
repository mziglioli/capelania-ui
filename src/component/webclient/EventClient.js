import "isomorphic-fetch";
const webClient = require("./WebClient");

export const getPublic = () => {
    console.info("getAll");
    return webClient.makeGetRequest("/public/event/");
};
export const getAll = () => {
    console.info("getAll");
	return webClient.makeGetRequest("/event/all");
};
export const getByPage = (page, size) => {
    console.info("getByPage");
    return webClient.makeGetRequest("/event/filter?page="+page+"&size="+size);
};
export const add = (event) => {
    console.info("update events: " + JSON.stringify(event));
    return webClient.makePostRequest("/event/add", event);
};
export const update = (event) => {
    console.info("update events: " + JSON.stringify(event));
    return webClient.makePutRequest("/event/update", event);
};
export const remove = (event) => {
    console.info("remove events: " + event.id);
    return webClient.makeDeleteRequest("/event/delete/"+event.id);
};
