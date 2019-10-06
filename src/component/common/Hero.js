import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {withTranslation} from "react-i18next";
import appStyles from "./Styles";

const Hero = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />
            <Grid container>
                <Grid item xs={6} ></Grid>
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
}
export default withTranslation()(Hero);