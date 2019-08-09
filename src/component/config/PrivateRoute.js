import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getUser} from "../utils/UserUtils";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    let user = getUser();
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