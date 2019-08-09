import "isomorphic-fetch";

const emailPattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const validateEmail = (email) => {
	if(email && email.match(emailPattern)) {
	    return true;
    } else {
	    return false;
    }
}
export const isNotEmpty = (value) => {
    return value && value.length > 0 && value.trim().length > 0;
}

