import React, { useState, useEffect} from 'react';
import { withTranslation } from "react-i18next";
import {getPublic} from "../webclient/MassClient";
import Divider from "@material-ui/core/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Hero from "../common/Hero";
import Container from "@material-ui/core/Container/Container";
import ChristianityIcon from "mdi-material-ui/Christianity";
import EggEasterIcon from "mdi-material-ui/EggEaster";
import appStyles from "../common/Styles";

const Mass = ({ t, props }) => {
    const classes = appStyles();
    const [massList, setMassList] = useState([]);

    useEffect(() => {
        findMass();
    }, []);

    function findMass() {
        // FIXME
        // getByPage(0,10).then(res => {
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