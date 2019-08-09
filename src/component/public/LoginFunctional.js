import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withTranslation } from "react-i18next";
import {isNotEmpty, validateEmail} from "../utils/ValidatorUtils";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import {login} from "../webclient/AuthClient";
const loginStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginFunctional = ({ t, successSubmit }) => {
    const classes = loginStyles();
    const [state, setState] = useState({email: "", password: "", isDisable: true, emailValid: false, passwordValid: false});
    const [error, setError] = useState(false);

    function handleEmailChange(e) {
        let valid = validateEmail(e.target.value);
        let isDisable = valid && isNotEmpty(state.password);
        setState({email:e.target.value, password: state.password, isDisable: !isDisable, emailValid: valid, passwordValid: state.passwordValid});
    }

    function handlePasswordChange(e) {
        let valid = isNotEmpty(e.target.value);
        let isDisable = valid && validateEmail(state.email);
        setState({email:state.email, password: e.target.value, isDisable: !isDisable, emailValid: state.emailValid, passwordValid: valid});
    }
    function validate(email, password) {
        return validateEmail(email) && isNotEmpty(password);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        if(validate(state.email, state.password)) {
            login(state.email, state.password).then(response => {
                console.debug("ye: " + JSON.stringify(response));
                successSubmit(response);
            }).catch(error => {
                setError(true);
            })
        } else {
            setState({email:state.email, password: state.password, isDisable: true, emailValid: state.emailValid, passwordValid: state.passwordValid});
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    { t('loginMessage') }
                </Typography>
                    <TextField
                        fullWidth
                        error={!state.emailValid}
                        id="outlined-error"
                        label="Email"
                        defaultValue={state.email}
                        margin="normal"
                        variant="outlined"
                        onChange={handleEmailChange}
                    />
                    <TextField
                        type="password"
                        fullWidth
                        error={!state.passwordValid}
                        id="outlined-error"
                        label="Password"
                        defaultValue={state.password}
                        margin="normal"
                        variant="outlined"
                        onChange={handlePasswordChange}
                    />
                    {error && (
                        <span className="error-text">{t('login_error')}</span>
                    )}
                    <Button
                        disabled={state.isDisable}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        { t('login') }
                    </Button>
            </div>
        </Container>
    );
};
export default withTranslation()(LoginFunctional);