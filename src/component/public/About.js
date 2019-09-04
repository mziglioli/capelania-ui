import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import Hero from "../common/Hero";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import IconButton from "@material-ui/core/IconButton/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Collapse from "@material-ui/core/Collapse/Collapse";
import Card from "@material-ui/core/Card/Card";

const aboutStyles = makeStyles(theme => ({
    mainGrid: {
        padding: '20px'
    },
    card: {
        display: 'flex',
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
}));

const About = ({ t, props }) => {
    const classes = aboutStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container style={{backgroundColor: 'white'}}>
                    <Grid item key={"gridAbout"} xs={12} md={6} style={{padding: '10px'}}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                {t('about_title')}
                            </Typography>
                            <Typography>
                                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Card key={"EventCard"} style={{maxWidth: '500px'}}>
                    <CardHeader
                        title={"test"}
                    />
                    <CardMedia style={{padding: '10px'}}
                        component="iframe"
                        image={"https://www.youtube.com/embed/C54QUqR2dng"}
                        className={classes.media}
                        title={"test"}
                    />
                </Card>
            </main>
        </Container>
    );
};
export default withTranslation()(About);