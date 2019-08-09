import React from "react";
import PropTypes from "prop-types";
import {logout} from "../webclient/AuthClient";
import Button from "@material-ui/core/Button/Button";
import {Redirect} from "react-router";
import HelpIcon from '@material-ui/icons/Help';
export class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            success: false
        }
    }

    componentDidMount() {
        this.logout();
    }

    logout() {
        logout().then(res => {
            localStorage.removeItem('user');
            this.setState({ success: true });
        }).catch(error => {
            //TODO
        });
    }

    render() {
        return (
            <div>
                {this.state.success && (
                    <p>Logout success, click  <a href="/">HERE</a> to start again</p>
                )}
                {!this.state.success && (
                    <p>Some thing wrong happen</p>
                )}
            </div>
        );
    }
}

Logout.propTypes = {
};
