import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import Hero from "../common/Hero";
import ContactForm from "./ContactForm";
import appStyles from "../common/Styles";

const Contact = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.content}>
                    <Typography className={classes.title} variant="h6" gutterBottom>
                        {t('contact_title')}
                    </Typography>
                    <Grid item key={"gridAbout"} xs={12} md={6} style={{padding: '10px'}}>
                        <ContactForm/>
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
};
export default withTranslation()(Contact);