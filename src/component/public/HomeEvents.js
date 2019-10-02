import React, { useState, useEffect, useRef } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
import {getPublicUpcoming} from "../webclient/EventClient";
import Divider from "@material-ui/core/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import Typography from "@material-ui/core/Typography";
import appStyles from "../common/Styles";

const HomeEvents = ({ t, successSubmit }) => {
    const classes = appStyles();
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        findMass();
    }, []);

    function findMass() {
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
                <Typography variant="h6" gutterBottom>
                    {t('events_upcoming_title')}
                </Typography>
            )}
            <List className={classes.root} key={"massPanel"}>
                {eventList.map(event => (
                    <React.Fragment key={"massPanelFragment_" + event.id}>
                        <ListItem alignItems="flex-start" key={event.title} component="a" href="/events">
                            <ListItemText
                                key={event.id}
                                primary={event.title}
                                secondary= {t('mass_start') + event.date}
                            />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </React.Fragment>
    );
};
export default withTranslation()(HomeEvents);