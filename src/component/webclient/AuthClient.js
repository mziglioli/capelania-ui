import "isomorphic-fetch";
const webClient = require("./WebClient");

export const getUserLoggedIn = () => {
    console.debug("getUserLoggedIn");
	return webClient.makeGetRequest("/user/auth");
};

export const login = (email, password) => {
    console.debug("login");
    return webClient.makeLoginRequest("/public/login", {email: email, password: password} );
};

export const logout = () => {
    console.debug("logout");
    return webClient.makeGetRequest("/public/logout");
};
