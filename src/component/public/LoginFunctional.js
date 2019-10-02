import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withTranslation } from "react-i18next";
import {isNotEmpty, validateEmail} from "../utils/ValidatorUtils";
import {login} from "../webclient/AuthClient";
import appStyles from "../common/Styles";

const LoginFunctional = ({ t, successSubmit }) => {
    const classes = appStyles();
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
                console.info("handleSubmit:result: " + JSON.stringify(response));
                if(response.success){
                    successSubmit(response.data);
                }else {
                    setError(true);
                }
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
                    <TextField fullWidth error={!state.emailValid} id="outlined-error" label="Email" defaultValue={state.email} margin="normal" variant="outlined" onChange={handleEmailChange}/>
                    <TextField type="password" fullWidth error={!state.passwordValid} id="outlined-error" label="Password" defaultValue={state.password} margin="normal" variant="outlined" onChange={handlePasswordChange}/>
                    {error && (
                        <span className="error-text">{t('login_error')}</span>
                    )}
                    <Button disabled={state.isDisable} type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSubmit}>
                        { t('login') }
                    </Button>
            </div>
        </Container>
    );
};
export default withTranslation()(LoginFunctional);