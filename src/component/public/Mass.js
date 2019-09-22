import React, { useState, useEffect, useRef } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
import {getByPage, getPublic} from "../webclient/MassClient";
import Divider from "@material-ui/core/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Hero from "../common/Hero";
import Container from "@material-ui/core/Container/Container";
import ChristianityIcon from "mdi-material-ui/Christianity";
import EggEasterIcon from "mdi-material-ui/EggEaster";

const massPanelStyles = makeStyles(theme => ({
}));

const Mass = ({ t, props }) => {
    const classes = massPanelStyles();
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
                <Grid container style={{backgroundColor: 'white', padding: '10px'}} key={"gridAbout"}>
                    <Typography variant="h6" gutterBottom style={{width: '100%'}}>
                        {t('mass_header_title')}
                    </Typography>
                    <Typography>
                        {t('mass_header_body')}
                    </Typography>
                </Grid>
                <Grid item key={"gridMasses"} xs={12} md={6} style={{padding: '10px'}}>
                    <List className={classes.root} key={"massPanel"}>
                        {massList.map(post => (
                            <React.Fragment key={"massPanelFragment_" + post.id}>
                                <ListItem alignItems="flex-start" key={post.title}>
                                    <ListItemAvatar>
                                        {post.type == 'EASTER' ? <EggEasterIcon /> :<ChristianityIcon />}
                                    </ListItemAvatar>
                                    <ListItemText
                                        key={post.id}
                                        primary={post.title}
                                        secondary= {post.date ? (t('date') + ": " + post.date + "    ") : "" + t('columns_day') + ": " + post.day}>
                                    </ListItemText>
                                    <p>{t('mass_start') + post.start}</p>
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </Grid>
            </main>
        </Container>
    );
};
export default withTranslation()(Mass);