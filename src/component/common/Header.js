import React, { useState } from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Divider from "@material-ui/core/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Drawer from "@material-ui/core/Drawer/Drawer";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import {Logout} from "../public/Logout";
import {logout} from "../webclient/AuthClient";
import LanguageIcon from "@material-ui/icons/Language";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from '@material-ui/core/Menu';
import Flag from 'react-world-flags';
import i18n from './../../i18n';
import { withTranslation } from "react-i18next";

const drawerWidth = 200;
const headerStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minHeight: '80px'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

const Header = (isAuth, user, removeUser) => {
    const classes = headerStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [flag, setFlag] = useState("gb");
    const isMenuOpen = Boolean(anchorEl);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleMenuClose() {
        setAnchorEl(null);
    }
    function handleLanguagePT() {
        setFlag("pt");
        i18n.changeLanguage("pt");
        handleMenuClose();
    }
    function handleLanguageGB() {
        setFlag("gb");
        i18n.changeLanguage("en");
        handleMenuClose();
    }

    function handleLogoutClick() {
        logout().then(res => {
            localStorage.removeItem('user');
            window.open("/", "_self");
        }).catch(error => {
            //TODO
        });
    }

    return (
        <Container maxWidth={false} className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx( classes.appBar, {[ classes.appBarShift]: open,})}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx( classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Capelania
                    </Typography>

                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Flag code={flag} height="16" />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id="primary-search-account-menu"
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleLanguagePT}> <Flag code="pt" height="16" /></MenuItem>
                <MenuItem onClick={handleLanguageGB}> <Flag code="gb" height="16" /></MenuItem>
            </Menu>
            <Drawer className={ classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper:  classes.drawerPaper,}}>
                <div className={ classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <ListItem button key="DrawerHomeItem" component="a" href="/">
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary={"Home"}></ListItemText>
                </ListItem>
                <ListItem button key={"DrawerAboutItem"} component="a" href="/about">
                    <ListItemIcon><HelpIcon/></ListItemIcon>
                    <ListItemText primary={"About"} />
                </ListItem>
                <ListItem button key={"DrawerContactItem"} component="a" href="/contact">
                    <ListItemIcon><ContactsIcon/></ListItemIcon>
                    <ListItemText primary={"Contact"} />
                </ListItem>
                <Divider />
                {isAuth && (
                    <ListItem button key={"DrawerLogoutItem"} onClick={handleLogoutClick}>
                        <ListItemIcon><AccountBoxIcon/></ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                )}
                {!isAuth && (
                    <ListItem button key={"DrawerLoginItem"} component="a" href="/login">
                        <ListItemIcon><AccountBoxIcon/></ListItemIcon>
                        <ListItemText primary={"Login"} />
                    </ListItem>
                )}
            </Drawer>
        </Container>
    );
};
export default withTranslation()(Header);