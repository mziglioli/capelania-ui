import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Home from "./component/public/Home";
import {About} from "./component/public/About";
import NotFound from "./component/public/NotFound";
import {Users} from "./component/private/Users";
import {User} from "./component/private/User";
import {Login} from "./component/public/Login";
import {PrivateRoute} from "./component/config/PrivateRoute";
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./component/common/Footer";
import {Contact} from "./component/public/Contact";
import Header from "./component/common/Header";
import {Logout} from "./component/public/Logout";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const defaultState = {
    user: {},
    isAuth: false,
    redirectHome: false
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setUser = this.setUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.state = defaultState;
    }

    componentDidMount() {

    }

    setUser(user) {
        this.setState({user: user, isAuth: true});
    }
    removeUser() {
        this.setState({user: {}, isAuth: false, redirectHome: true});
        window.open("/", "_self");
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <I18nextProvider i18n={ i18n }>
                    {this.state.redirectHome && (
                        <Redirect to={"/"} />
                    )}
                    {!this.state.redirectHome && (
                        <Router>
                            <Header isAuth={this.state.isAuth} user={this.state.user} removeUser={this.removeUser}/>
                            <div className="contentContainer">
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/about" component={About} />
                                    <Route exact path="/contact" component={Contact} />
                                    <Route exact path="/logout" component={Logout} />

                                    <Route path="/user/add" component={User} />
                                    <PrivateRoute path='/users' state={this.state} component={Users} />

                                    <Route path="/login"  render={(props) => (
                                        <Login {...props} setUser={this.setUser}/>
                                    )} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                            <Footer/>
                        </Router>
                    )}
                </I18nextProvider>,
            </React.Fragment>
        );
    }
}

export default App;