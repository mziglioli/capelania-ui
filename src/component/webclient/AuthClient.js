import "isomorphic-fetch";
const webClient = require("./WebClient");

export const getUserLoggedIn = () => {
    console.debug("getUserLoggedIn");
	return webClient.makeGetRequest("http://localhost:8089/user/auth");
};

export const login = (email, password) => {
    console.debug("login");
    return webClient.makePostRequest("http://localhost:8089/public/login", {email: email, password: password} );
};

export const logout = () => {
    console.debug("logout");
    return webClient.makeGetRequest("http://localhost:8089/public/logout");
};
