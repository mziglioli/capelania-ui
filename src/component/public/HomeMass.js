import React, { useState, useEffect } from 'react';
import { withTranslation } from "react-i18next";

import { Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";

import EggEasterIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { Christianity as ChristianityIcon } from "mdi-material-ui";
import appStyles from "../common/Styles";
import {getPublic} from "../webclient/MassClient";

const HomeMass = ({ t, successSubmit }) => {
    const classes = appStyles();
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
            <Grid item key={"gridMassesHome"} xs={12} md={12} className={classes.sidebarAboutBox} style={{margin: 10}}>
                <Typography variant="h6" gutterBottom>
                    {t('masses_upcoming_title')}
                </Typography>
                <List className={classes.sidebarAboutBox} key={"massPanel"}>
                    {massList.map(post => (
                        <React.Fragment key={"massPanelFragment_" + post.id}>
                            <ListItem alignItems="flex-start" key={post.title} component="a" href="/mass" style={{color: "black"}}>
                                <ListItemAvatar>
                                    {post.type === 'EASTER' ? <EggEasterIcon /> :<ChristianityIcon />}
                                </ListItemAvatar>
                                <ListItemText
                                    key={post.id}
                                    primary={post.title}
                                    secondary= {post.date ? (t('date') + ": " + post.date + "    ") : "" + t('columns_day') + ": " + t('day_' + post.day)}>
                                </ListItemText>
                                <p>{t('mass_start') + post.start}</p>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Grid>
        </React.Fragment>
    );
};
export default withTranslation()(HomeMass);