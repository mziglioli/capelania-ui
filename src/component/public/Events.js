import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {red} from '@material-ui/core/colors';
import GridList from "@material-ui/core/GridList/GridList";
import Collapse from "@material-ui/core/Collapse/Collapse";
import IconButton from "@material-ui/core/IconButton/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {getPublic} from "../webclient/EventClient";
import Hero from "../common/Hero";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";

const eventsStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    gridList: {
        paddingTop: '10px',
        paddingBottom: '10px'
    },
}));

const Events = ({ t, props }) => {
    const classes = eventsStyles();
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
                <Grid container style={{backgroundColor: 'white', padding: '10px'}} key={"gridAbout"}>
                        <Typography variant="h6" gutterBottom style={{width: '100%'}}>
                            {t('events_header_title')}
                        </Typography>
                        <Typography>
                            {t('events_header_body')}
                        </Typography>
                </Grid>
                <GridList cols={qtdeColumns} cellHeight={'auto'} spacing={4} className={classes.gridList}>
                    {eventList.map(event => (
                        <GridListTile key={"GridListEvent"+event.id}>
                            <Card key={"EventCard"+event.id}>
                                <CardHeader
                                    title={event.title}
                                    subheader={event.date}
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