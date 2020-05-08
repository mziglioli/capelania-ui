import React, { useState, useEffect } from 'react';
import { withTranslation } from "react-i18next";

import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

import appStyles from "../common/Styles";
import {getPublicUpcoming} from "../webclient/EventClient";

const HomeEvents = ({ t }) => {
    const classes = appStyles();
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        findEvents();
    }, []);

    function findEvents() {
        getPublicUpcoming().then(res => {
           if(res && Object.keys(res).length) {
               setEventList(res);
           }
        }).catch(error => {
            //TODO
        });
    }
    return (
        <React.Fragment>
            {eventList.length > 0 && (
                <Grid item key={"gridHomeEvents"} xs={12} md={12} className={classes.sidebarAboutBox} style={{margin: 10}}>
                    <Typography variant="h6" gutterBottom>
                        {t('events_upcoming_title')}
                    </Typography>
                    {eventList.map(event => (
                        <Grid item key={"gridEventsHome_" + event.id} className={classes.gridEventsHome} xs={12} md={12} >
                            <Card className={classes.card} component="a" href="/events">
                                <CardMedia
                                    className={classes.cover}
                                    image={event.img}
                                    title={event.title}
                                />
                                <div className={classes.details}>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {event.title}
                                        </Typography>
                                        {t('mass_start') + event.date}
                                        <Typography>
                                            {event.description}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </React.Fragment>
    );
};
export default withTranslation()(HomeEvents);