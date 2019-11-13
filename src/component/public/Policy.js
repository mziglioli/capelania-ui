import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import Hero from "../common/Hero";
import appStyles from "../common/Styles";

const Policy = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.mainContent}>
                    <Grid item key={"gridPolicy"} xs={12} md={6} style={{padding: '10px'}}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                {t('footer_privacy')}
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
export default withTranslation()(Policy);