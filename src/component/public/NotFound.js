import React from "react";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import Container from "@material-ui/core/Container/Container";
import Hero from "../common/Hero";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import {makeStyles} from "@material-ui/core";

const notFoundStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
}));
const NotFound = ({ t, props }) => {
    const classes = notFoundStyles();
    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container style={{backgroundColor: 'white'}}>
                    <Grid item key={"gridAbout"} xs={12} md={6} style={{padding: '10px'}}>
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
}
export default withTranslation()(NotFound);