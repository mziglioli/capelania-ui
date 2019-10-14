import "isomorphic-fetch";
const webClient = require("./WebClient");

export const getPublic = () => {
    console.info("getAll");
    return webClient.makeGetRequest("/public/opening/all");
};
export const getAll = () => {
    console.info("getAll");
	return webClient.makeGetRequest("/opening/all");
};
export const getByPage = (page, size) => {
    console.info("getByPage");
    return webClient.makeGetRequest("/opening/filter?page="+page+"&size="+size);
};
export const add = (opening) => {
    console.info("update opening: " + JSON.stringify(opening));
    return webClient.makePostRequest("/opening/add", opening);
};
export const update = (opening) => {
    console.info("update opening: " + JSON.stringify(opening));
    return webClient.makePutRequest("/opening/update", opening);
};
export const remove = (opening) => {
    console.info("remove opening: " + opening.id);
    return webClient.makeDeleteRequest("/opening/delete/"+opening.id);
};
