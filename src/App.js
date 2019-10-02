import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./component/public/Home";
import About from "./component/public/About";
import NotFound from "./component/public/NotFound";
import ManageUser from "./component/private/ManageUser";
import ManageMass from "./component/private/ManageMass";
import {Login} from "./component/public/Login";
import {PrivateRoute} from "./component/config/PrivateRoute";
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./component/common/Footer";
import Contact from "./component/public/Contact";
import Header from "./component/common/Header";
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {getUser, removeUser, setUser} from "./component/utils/UserUtils";
import Events from "./component/public/Events";
import Mass from "./component/public/Mass";
import ManageEvents from "./component/private/ManageEvents";
import Policy from "./component/public/Policy";
import Terms from "./component/public/Terms";
import ManageOpening from "./component/private/ManageOpening";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Or Create your Own theme:
const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#fff8e1',
                main: '#ffc107',
                dark: '#ff6f00',
                contrastText: '#fff',
            }
        }
    },
)
class App extends React.Component {
    constructor(props) {
        super(props);
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        let loggedUser = getUser();
        let isAuth = false;
        if(loggedUser){
            isAuth = true;
        }
        this.state = {
            user: loggedUser,
            isAuth: isAuth
        };
    }
    addUser(user) {
        setUser(user);
        this.setState({user: user, isAuth: true});
    }
    deleteUser() {
        removeUser();
        this.setState({user: {}, isAuth: false});
        window.open("/", "_self");
    }
    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <I18nextProvider i18n={ i18n }>
                    <Router>
                        <Header isAuth={this.state.isAuth} user={this.state.user} removeUser={this.deleteUser}/>
                        <div className="contentContainer">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/logout" component={Home} />
                                <Route exact path="/events" component={Events} />
                                <Route exact path="/mass" component={Mass} />
                                <Route exact path="/policy" component={Policy} />
                                <Route exact path="/terms" component={Terms} />

                                <PrivateRoute path='/auth/users' appState={this.state} component={ManageUser} />
                                <PrivateRoute path='/auth/masses' appState={this.state} component={ManageMass}/>
                                <PrivateRoute path='/auth/events' appState={this.state} component={ManageEvents}/>
                                <PrivateRoute path='/auth/opening' appState={this.state} component={ManageOpening}/>

                                <Route path="/login"  render={(props) => (
                                    <Login {...props} addUser={this.addUser} appState={this.state}/>
                                )} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                        <Footer/>
                    </Router>
                </I18nextProvider>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}
export default App;