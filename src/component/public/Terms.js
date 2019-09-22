import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import Hero from "../common/Hero";
const termsStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    }
}));

const Terms = ({ t, props }) => {
    const classes = termsStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container style={{backgroundColor: 'white'}}>
                    <Grid item key={"gridAbout"} xs={12} md={6} style={{padding: '10px'}}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                {t('contact_title')}
                            </Typography>
                            <Typography>
                                {t('site_building')}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
};
export default withTranslation()(Terms);