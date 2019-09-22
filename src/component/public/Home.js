import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import HomeMass from "./HomeMass";
import Hero from "../common/Hero";
import Link from "@material-ui/core/Link/Link";
import PlaceForYouCard from "../common/PlaceForYouCard";
import HomeEvents from "./HomeEvents";

const useStyles = makeStyles(theme => ({
    mainGrid: {
        padding: '20px',
        paddingBottom: '20px'
    },
    card: {
        display: 'flex',
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
}));

const Home = ({ t, props }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container style={{backgroundColor: 'white'}}>
                    <Grid item key={"gridMass"} xs={12} md={6} style={{padding: '10px'}}>
                        <HomeMass {...props} />
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding: '10px'}}>
                        <HomeEvents {...props} />
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding: '10px'}}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                {t('home_about_title')}
                            </Typography>
                            <Typography>
                                {t('home_about_body')}
                            </Typography>
                            <Link style={{ color: 'gray' }} variant="subtitle1" href="/about">
                                {t('hero_continue_reading')}
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} style={{padding: '10px'}}>
                        <PlaceForYouCard />
                    </Grid>
                </Grid>

                <Grid container className={classes.mainGrid}>

                </Grid>
            </main>
        </Container>
    );
};
export default withTranslation()(Home);