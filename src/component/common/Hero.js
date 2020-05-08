import React from 'react';
import { withTranslation } from "react-i18next";
import { Grid, Link, Paper } from '@material-ui/core';
import appStyles from "./Styles";

const Hero = ({ t, props }) => {
    const classes = appStyles();
    return (
        <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6} >
                    <div className={classes.mainFeaturedPostContent}>
                        <Link style={{ color: 'white', fontSize: '0.8em' }} href="/about">
                            {t('hero_continue_reading')}
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};
export default withTranslation()(Hero);