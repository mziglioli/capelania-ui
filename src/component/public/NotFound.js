import React from "react";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";

import { Container, Grid, Paper, Typography } from '@material-ui/core';

import appStyles from "../common/Styles";

import Hero from "../common/Hero";

const NotFound = ({ t, props }) => {
    const classes = appStyles();
    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.mainContent}>
                    <Grid item key={"gridNotFound"} xs={12} md={6} style={{padding: '10px'}}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                {t('not_found_message')}
                            </Typography>
                            <Typography>
                                <Link to={'/'} className="nav-link"> {t('back_home')} </Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
};
export default withTranslation()(NotFound);