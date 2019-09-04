import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {withTranslation} from "react-i18next";

const heroStyles = makeStyles(theme => ({
    mainFeaturedPost: {
        minHeight: '180px',
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(1),
        backgroundImage: 'url(http://perucatolico.com/wp-content/uploads/2016/05/santa-rita-casia-peru-catolico.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(1)
    }
}));

const Hero = ({ t, props }) => {
    const classes = heroStyles();

    return (
        <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
                <img
                    style={{ display: 'none' }}
                    src="http://perucatolico.com/wp-content/uploads/2016/05/santa-rita-casia-peru-catolico.jpg"
                    alt="background"
                />
            }
            <div className={classes.overlay} />
            <Grid container>
                <Grid item xs={6} ></Grid>
                <Grid item xs={6} >
                    <div className={classes.mainFeaturedPostContent}>
                        <Link style={{ color: 'white' }} variant="subtitle1" href="/about">
                            {t('hero_continue_reading')}
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}
export default withTranslation()(Hero);