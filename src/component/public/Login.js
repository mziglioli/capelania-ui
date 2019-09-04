import React from "react";
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
import LoginFunctional from "./LoginFunctional";

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            email: "",
            password: "",
            redirectToReferrer: false
        };
		this.successSubmit = this.successSubmit.bind(this);
	}
	successSubmit(user) {
        this.props.addUser(user);
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
    addUser: PropTypes.func.isRequired
};
