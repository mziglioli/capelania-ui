import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import HomeMass from "./HomeMass";
import Hero from "../common/Hero";
import Link from "@material-ui/core/Link/Link";
import PlaceForYouCard from "../common/PlaceForYouCard";
import HomeEvents from "./HomeEvents";
import appStyles from "../common/Styles";

const Home = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.mainContent}>
                    <Grid item key={"gridHomeIntro"} xs={12} md={6} style={{padding: '10px'}}>
                        <Typography style={{padding: '10px'}}>
                            {t('intro')}
                        </Typography>
                    </Grid>
                    <Grid item key={"gridHomeMass"} xs={12} md={6}>
                        <HomeMass {...props} />
                    </Grid>
                    <Grid item key={"gridHomeEvents"} xs={12} md={6}>
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
                    <PlaceForYouCard />
                </Grid>
                <Grid container className={classes.mainGrid}>

                </Grid>
            </main>
        </Container>
    );
};
export default withTranslation()(Home);