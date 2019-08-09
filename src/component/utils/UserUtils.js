import React from "react";

export const getUser = () => {
    let json = localStorage.getItem('user') ;
    if (json) {
        return JSON.parse(json);
    } else {
        return null;
    }
};
