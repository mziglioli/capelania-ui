import React from "react";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";
import Container from "@material-ui/core/Container/Container";
import Hero from "../common/Hero";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import appStyles from "../common/Styles";

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
}
export default withTranslation()(NotFound);