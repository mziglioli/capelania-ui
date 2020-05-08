import React, {useEffect, useState} from 'react';
import {withTranslation} from "react-i18next";
import clsx from "clsx";

import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Container, Grid, GridList, GridListTile, IconButton, Typography } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import appStyles from "../common/Styles";

import {getPublic} from "../webclient/EventClient";
import Hero from "../common/Hero";

const Events = ({ t, props }) => {
    const classes = appStyles();
    const [expanded, setExpanded] = useState(false);
    const [control, setControl] = useState([]);
    const [eventList, setEventList] = useState([]);
    const qtdeColumns = window.innerWidth > 500 ? 3 : 1;

    function handleExpandClick(e) {
        setExpanded(!expanded);
        let previousValue = control[e.currentTarget.id];
        setControl( {[e.currentTarget.id]: !previousValue});
    }
    useEffect(() => {
        findEvents();
    }, []);

    function findEvents() {
        // FIXME
        // getByPage(0,10).then(res => {
        getPublic().then(res => {
            if(res && Object.keys(res).length) {
                setEventList(res);
            }
        }).catch(error => {
            //TODO
        });
    }
    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.mainContent} key={"gridEvents"}>
                    <Typography variant="h6" gutterBottom style={{padding: 10}}>
                        {t('events_header_title')}
                    </Typography>
                </Grid>
                <GridList cols={qtdeColumns} cellHeight={'auto'} spacing={4} className={classes.gridList}>
                    {eventList.map(event => (
                        <GridListTile key={"GridListEvent"+event.id}>
                            <Card key={"EventCard"+event.id}>
                                <CardHeader
                                    title={event.title}
                                    subheader={event.dateDisplay}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={event.img}
                                    title={event.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton id={"event_"+event.id}
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: control["event_"+event.id],
                                                })}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={control["event_"+event.id]} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>
                                            {event.text}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </GridListTile>
                    ))}
                </GridList>
            </main>
        </Container>
    );
};
export default withTranslation()(Events);