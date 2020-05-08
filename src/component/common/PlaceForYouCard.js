import React from "react";
import {withTranslation} from "react-i18next";
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import appStyles from "./Styles";

const PlaceForYouCard = ({t}) => {
    const classes = appStyles();
    return (
        <Grid item xs={12} md={6} style={{padding: '10px'}}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={window.location.origin + "/place_for_you.jpg"}
                    title="Here there is a place for you"
                />
                <div className={classes.details}>
                    <CardContent>
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
};
export default withTranslation()(PlaceForYouCard);