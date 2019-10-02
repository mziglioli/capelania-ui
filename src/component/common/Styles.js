import React from "react";
import {makeStyles} from "@material-ui/core";
import {green, red} from "@material-ui/core/colors";

const appStyles = makeStyles(theme => ({
    mainGrid: {
        padding: '20px',
        paddingBottom: '20px'
    },
    card: {
        display: 'flex',
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.light,
    },
    title: {
        padding: 20,
        width: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain'
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
    gridList: {
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    success: {
        backgroundColor: green[600],
        width: '100%',
        borderRadius: 4
    },
    error: {
        backgroundColor: theme.palette.error.dark,
        width: '100%',
        borderRadius: 4
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10
    },
    progress: {
        margin: theme.spacing(2),
    },
    mainContent: {
        backgroundColor: "white"
    }
}));
export default appStyles;