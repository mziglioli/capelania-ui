import "isomorphic-fetch";
const webClient = require("./WebClient");

export const getAll = () => {
    console.debug("getAll");
	return webClient.makeGetRequest("/user/all");
};
export const add = (user) => {
    console.info("update mass: " + JSON.stringify(user));
    return webClient.makePostRequest("/user/add", user);
};
export const update = (user) => {
    console.info("update mass: " + JSON.stringify(user));
    return webClient.makePutRequest("/user/update", user);
};
export const remove = (user) => {
    console.info("remove mass: " + user.id);
    return webClient.makeDeleteRequest("/user/delete/"+user.id);
};
