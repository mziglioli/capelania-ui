import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {withTranslation} from "react-i18next";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 320,
        backgroundSize: 150
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },

}));

const PlaceForYouCard = ({t}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} style={{padding: '10px'}}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={window.location.origin + "/place_for_you.jpg"}
                    title="Here there is a place for you"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h6" gutterBottom>
                            {t('place_for_you_title')}
                        </Typography>
                        <Typography>
                            {t('place_for_you_body')}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}
export default withTranslation()(PlaceForYouCard);