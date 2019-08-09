import React from 'react';
import {Header} from "../common/Header";
import { getAll } from "../webclient/UserClient";

export class Users extends React.Component {
	constructor(props) {
		super(props);
        this.findAll = this.findAll.bind(this);
		this.state= {
		    users: []
        };
	}

	componentDidMount() {
        this.findAll();
	}

	findAll() {
        getAll().then(response => {
            this.setState({ users: response });
        }).catch(error => {
            //todo
        })
    }

	render() {
		return (
            <div>
                This is the users:
                <hr />
                <ul>
                    {this.state.users.map((user, index) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
		);
	}
}
