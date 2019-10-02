import "isomorphic-fetch";
const webClient = require("./WebClient");

export const add = (contact) => {
    console.info("add contact: " + JSON.stringify(contact));
    return webClient.makePostRequest("/public/contact/add", contact);
};
