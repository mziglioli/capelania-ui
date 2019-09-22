import React, { useState, useEffect, useRef } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
import {getPublic} from "../webclient/MassClient";
import Divider from "@material-ui/core/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Typography from "@material-ui/core/Typography";

const massPanelStyles = makeStyles(theme => ({
}));

const HomeMass = ({ t, successSubmit }) => {
    const classes = massPanelStyles();
    const [massList, setMassList] = useState([]);

    useEffect(() => {
        findMass();
    }, []);

    function findMass() {
        getPublic().then(res => {
           if(res && Object.keys(res).length) {
               setMassList(res);
           }
        }).catch(error => {
            //TODO
        });
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {t('masses_upcoming_title')}
            </Typography>
            <List className={classes.root} key={"massPanel"}>
                {massList.map(post => (
                    <React.Fragment key={"massPanelFragment_" + post.id}>
                        <ListItem alignItems="flex-start" key={post.title} component="a" href="/mass">
                            <ListItemText
                                key={post.id}
                                primary={post.title}
                                secondary= {t('mass_start') + post.start}
                            />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </React.Fragment>
    );
};
export default withTranslation()(HomeMass);