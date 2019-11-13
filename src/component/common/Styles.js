import React from "react";
import {makeStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

const drawerWidth = 200;

const appStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // backgroundColor: 'transparent',
        boxShadow: 'none',
        paddingRight: 20,
        paddingLeft: 20
    },
    toolbar: {
        minHeight: '48px',
        padding: '0'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    welcome: {
        paddingRight: '5%',
    },
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
        backgroundSize: '50%'
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
        display: 'inline-block',
        minHeight: '20px',
        backgroundColor: theme.palette.primary.main,
        padding: 0,
        flexWrap: 'wrap',
        // display: 'flex'
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
    },
    mainFeaturedPost: {
        minHeight: '180px',
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
        backgroundImage: 'url(http://www.capelaniamanchester.co.uk/images/header.jpg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        textAlign: 'right'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(1)
    }
}));
export default appStyles;