import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ appState, component: Component, ...rest }) => {
    if (appState && appState.user && appState.user.active) {
        return (
            <Route {...rest} render={props => (
                <Component {...props} appState={appState}/>
            )}/>);
    } else {
        return (
            <Route {...rest} render={props => (
                <Redirect to={{ pathname: '/login', state: { from: props.location }, appState:appState }} />
            )}/>);
    }
};