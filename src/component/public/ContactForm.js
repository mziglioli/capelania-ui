import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { withTranslation } from "react-i18next";

import { Avatar, Button, CircularProgress, MenuItem, TextField, Typography } from '@material-ui/core';
import { MailOutline as MailOutlineIcon } from '@material-ui/icons';

import appStyles from "../common/Styles";

import { add } from "../webclient/ContactClient";
import { validateEmail } from "../utils/ValidatorUtils";

const ContactForm = ({ t }) => {
    const classes = appStyles();
    const [showSuccess, setShowSuccess] = useState({success: false, loading: false, showError: false});
    const initValues = {
        name: {value: '', error: true},
        email: {value: '', error: true},
        emailConfirm: {value: '', error: true},
        subject: {value: '', error: true},
        text: {value: '', error: true},
    };
    const [values, setValues] = useState(initValues);

    function showSubmit() {
        return !values.name.error && !values.email.error && !values.subject.error && !values.text.error
    }
    function hasError(target) {
        let result = false;
        if(target.name === "subject"){
            result = !isSubjectValid(target.value);
        } else if(target.name === "email"){
            result = !validateEmail(target.value);
        } else if(target.name === "text"){
            result = !isTextValid(target.value);
        } else if(target.name === "name"){
            result = !isNameValid(target.value);
        } else if(target.name === "emailConfirm"){
            result = !isEmailConfirmValid(target.value);
        }
        return result;
    }
    function isTextValid(text) {
        return text && text.length > 10;
    }
    function isEmailConfirmValid(text) {
        return validateEmail(text) && text === values.email.value;
    }
    function isNameValid(name) {
        return name && name.length > 2;
    }
    function isSubjectValid(subject) {
        return subject && subject.length > 2 && subject !=="";
    }

    function handleSubmit(e) {
        e.preventDefault();
        setShowSuccess({success: false, loading: true, showError: false});
        console.log("handleSubmit");
        add({
            name: values.name.value,
            email: values.email.value,
            subject: values.subject.value,
            text: values.text.value
        }).then(res => {
            if (!res.ok) {
                setShowSuccess({success: false, loading: false, showError: true});
            } else {
                setShowSuccess({success: true, loading: false, showError: false});
                setValues(initValues);
            }
        }).catch(error => {
            console.error("error: " + error);
            setShowSuccess({success: false, loading: false, showError: true});
        })
    }
    function handleChange(event) {
        let target = event.target;
        let name = event.target.name;
        let value = event.target.value;
        console.log("handleChange: " + name + " - " + value);
        setValues(oldValues => ({
            ...oldValues,
            [name]: {
                value: value,
                error: hasError(target)
            },
        }));
    }

    return (
            <div className={classes.paper}>
                {showSuccess.loading && (
                    <CircularProgress className={classes.progress} />
                )}
                {showSuccess.success && (
                    <div style={{width: "100%"}}>
                        <div className={classes.success}>
                            <Typography variant="h6" gutterBottom className={classes.message}>
                                {t('contactSuccess')}
                            </Typography>
                        </div>
                        <Typography>
                            <Link to={'/'} className="nav-link"> {t('back_home')} </Link>
                        </Typography>
                    </div>
                )}
                {showSuccess.showError && (
                    <div className={classes.error}>
                        <Typography variant="h6" gutterBottom className={classes.message}>
                            {t('contactError')}
                        </Typography>
                    </div>
                )}
                {!showSuccess.success && !showSuccess.loading && (
                    <div>
                        <Avatar className={classes.avatar}>
                            <MailOutlineIcon />
                        </Avatar>
                        <TextField fullWidth error={values.name.error} id="contact-name" label={t("Name")} name={"name"} value={values.name.value} margin="normal" variant="outlined" onChange={handleChange}/>
                        <TextField fullWidth error={values.email.error} id="contact-email" name={"email"} label={t("Email")} value={values.email.value} margin="normal" variant="outlined" onChange={handleChange}/>
                        <TextField fullWidth error={values.emailConfirm.error} id="contact-confirmEmail" name={"emailConfirm"} label={t("emailConfirm")} value={values.emailConfirm.value} margin="normal" variant="outlined" onChange={handleChange}/>
                        <TextField fullWidth select error={values.subject.error} name={"subject"} id="contact-subject" label={t("Subject")} value={values.subject.value} margin="normal" variant="outlined" onChange={handleChange}>
                            {["select", "catechism", "baptism", "marriage", "others"].map(e =>
                                <MenuItem key={"key_"+e} value={e === "select" ? "" : e}>
                                    {t([e])}
                                </MenuItem>
                            )}
                        </TextField>
                        <TextField multiline={true} rows={10} rowsMax={100} fullWidth error={values.text.error} id="contact-text" name={"text"} label={t("Text")} value={values.text.value} margin="normal" variant="outlined" onChange={handleChange}/>
                        <Button disabled={!showSubmit()} type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSubmit}>
                            { t('Submit') }
                        </Button>
                    </div>
                )}
            </div>
    );
};
export default withTranslation()(ContactForm);