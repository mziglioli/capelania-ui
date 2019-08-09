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
		this.successSubmit = this.successSubmit.bind(this);
	}

	successSubmit(user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.props.setUser(user);
        this.setState(() => ({
            redirectToReferrer: true
        }));
    }

	render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

		return (
			<div>
				<LoginFunctional successSubmit={this.successSubmit} />
			</div>
		);
	}
}
Login.propTypes = {
    setUser: PropTypes.func.isRequired,
};
