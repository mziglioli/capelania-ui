import React from "react";
import PropTypes from "prop-types";
import { login } from "../webclient/AuthClient";
import { Redirect } from 'react-router-dom';
import LoginFunctional from "./LoginFunctional";

const originalLoginState = {
    email: "",
    password: "",
    redirectToReferrer: false
};

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = originalLoginState;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(email, password) {
        login(email, password).then(response => {
            console.debug("ye: " + JSON.stringify(response));
            localStorage.setItem("user", JSON.stringify(response));
            this.props.setUser(response);
            this.setState(() => ({
                redirectToReferrer: true
            }));
        }).catch(error => {
            //TODO
        })
    }

	render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

		return (
			<div>
				<LoginFunctional onSubmit={this.handleSubmit} />
			</div>
		);
	}
}
Login.propTypes = {
    setUser: PropTypes.func.isRequired,
};
