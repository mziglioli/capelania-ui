import React, { useState, useEffect} from 'react';
import { withTranslation } from "react-i18next";

import { Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Christianity as ChristianityIcon, EggEaster as EggEasterIcon } from "mdi-material-ui";

import appStyles from "../common/Styles";

import {getPublic} from "../webclient/MassClient";
import Hero from "../common/Hero";

const Mass = ({ t, props }) => {
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
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.mainContent} key={"gridMass"}>
                    <Grid item key={"gridAbout"} xs={12} md={12} style={{padding: '10px'}}>
                        <Typography variant="h6" gutterBottom style={{width: '100%'}}>
                            {t('mass_header_title')}
                        </Typography>
                    </Grid>

                    <Grid item key={"gridMasses"} xs={12} md={12} className={classes.sidebarAboutBox} style={{margin: 10}}>
                        <List className={classes.sidebarAboutBox} key={"massPanel"}>
                            {massList.map(post => (
                                <React.Fragment key={"massPanelFragment_" + post.id}>
                                    <ListItem alignItems="flex-start" key={post.title}>
                                        <ListItemAvatar>
                                            {post.type === 'EASTER' ? <EggEasterIcon /> :<ChristianityIcon />}
                                        </ListItemAvatar>
                                        <ListItemText
                                            key={post.id}
                                            primary={post.title}
                                            secondary= {post.date ? (t('date') + ": " + post.date + "    ") : "" + t('columns_day') + ": " +  t('day_'+ post.day)}>
                                        </ListItemText>
                                        <p>{t('mass_start') + post.start}</p>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Grid>
                </Grid>

            </main>
        </Container>
    );
};
export default withTranslation()(Mass);