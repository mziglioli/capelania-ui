import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    let json = localStorage.getItem('user') ;
    console.debug("PrivateRoute: " + json);
    let user;
    if (json) {
        user = JSON.parse(json);
    }
    if (user && user.data && user.data.active) {
        return (
            <Route {...rest} render={props => (
                <Component {...props} />
            )}/>);
    } else {
        return (
            <Route {...rest} render={props => (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )}/>);
    }
};