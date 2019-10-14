import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
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
import FeedbackIcon from '@material-ui/icons/Feedback';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import {logout} from "../webclient/AuthClient";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import AccountBoxMultipleIcon from 'mdi-material-ui/AccountBoxMultiple';
import LoginIcon from 'mdi-material-ui/Login';
import LogoutIcon from 'mdi-material-ui/Logout';
import ChristianityOutlineIcon from 'mdi-material-ui/ChristianityOutline';
import CalendarMultipleCheckIcon from 'mdi-material-ui/CalendarMultipleCheck';
import ScheduleIcon from '@material-ui/icons/Schedule';

import Menu from '@material-ui/core/Menu';
import Flag from 'react-world-flags';
import i18n from './../../i18n';
import { withTranslation } from "react-i18next";
import appStyles from "./Styles";

const Header = ({t, isAuth, user, removeUser}) => {
    console.info('HeaderL ' + JSON.stringify(user));
    const classes = appStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    let preSelectedLanguage = i18n.language;
    if (!preSelectedLanguage) {
        preSelectedLanguage = "gb";
    }
    const [flag, setFlag] = useState(preSelectedLanguage);
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
        setFlag("br");
        i18n.changeLanguage("pt");
        handleMenuClose();
    }
    function handleLanguageGB() {
        setFlag("gb");
        i18n.changeLanguage("gb");
        handleMenuClose();
    }

    function handleLogoutClick() {
        logout().then(res => {
            removeUser();
        }).catch(error => {
            //TODO
        });
    }
    useEffect(() => {
        if (preSelectedLanguage && (preSelectedLanguage.indexOf("gb") <0  && preSelectedLanguage.indexOf("br") <0)) {
            setFlag("br");
            i18n.changeLanguage("pt");
        } else if (preSelectedLanguage.indexOf("br") > 0) {
            setFlag("br");
            i18n.changeLanguage("pt");
        }
    }, []);
    return (
        <Container maxWidth={false} className={classes.root}>
            <CssBaseline />
            <AppBar color="primary" position="static" className={clsx( classes.appBar, {[ classes.appBarShift]: open,})}>
                <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx( classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <img height="60px" width="60px" alt="logo da capelania" src={window.location.origin + "/LOGO.png"}  />
                    <div className={classes.grow} />
                    {isAuth && (
                        <Typography className={classes.welcome} noWrap>
                            {t('header_welcome')}: {user.name}
                        </Typography>
                    )}
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <Flag code={flag} height={flag === "br" ? "22px" : "16px"} />
                    </IconButton>
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
                <MenuItem onClick={handleLanguagePT}> <Flag code="br" height="22" /></MenuItem>
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
                    <ListItemText primary={t('menu_home')}></ListItemText>
                </ListItem>
                <ListItem button key={"DrawerAboutItem"} component="a" href="/about">
                    <ListItemIcon><HelpIcon/></ListItemIcon>
                    <ListItemText primary={t('menu_about')} />
                </ListItem>
                <ListItem button key={"DrawerContactItem"} component="a" href="/contact">
                    <ListItemIcon><ContactsIcon/></ListItemIcon>
                    <ListItemText primary={t('menu_contact')} />
                </ListItem>
                <ListItem button key={"DrawerPublicMassItem"} component="a" href="/mass">
                    <ListItemIcon><ChristianityOutlineIcon/></ListItemIcon>
                    <ListItemText primary={t('menu_masses')} />
                </ListItem>
                <ListItem button key={"DrawerPublicEventItem"} component="a" href="/events">
                    <ListItemIcon><CalendarMultipleCheckIcon /></ListItemIcon>
                    <ListItemText primary={t('menu_events')} />
                </ListItem>

                {isAuth && (
                    <React.Fragment>
                        <Divider />
                        <ListItem button key={"DrawerMassItem"} component="a" href="/auth/masses">
                            <ListItemIcon><ChristianityOutlineIcon/></ListItemIcon>
                            <ListItemText primary={t('menu_masses')} />
                        </ListItem>
                        <ListItem button key={"DrawerFeedItem"} component="a" href="/auth/feeds">
                            <ListItemIcon><FeedbackIcon /></ListItemIcon>
                            <ListItemText primary={t('menu_feeds')} />
                        </ListItem>
                        <ListItem button key={"DrawerEventItem"} component="a" href="/auth/events">
                            <ListItemIcon><CalendarMultipleCheckIcon /></ListItemIcon>
                            <ListItemText primary={t('menu_events')} />
                        </ListItem>
                        <ListItem button key={"DrawerOpeningItem"} component="a" href="/auth/opening">
                            <ListItemIcon><ScheduleIcon /></ListItemIcon>
                            <ListItemText primary={t('menu_opening')} />
                        </ListItem>
                        {user.allRoles.indexOf("ROLE_ADMIN") >= 0 && (
                            <ListItem button key={"DrawerUserItem"} component="a" href="/auth/users">
                                <ListItemIcon><AccountBoxMultipleIcon/></ListItemIcon>
                                <ListItemText primary={t('menu_users')} />
                            </ListItem>
                        )}
                        <Divider />
                        <ListItem button key={"DrawerLogoutItem"} onClick={handleLogoutClick}>
                            <ListItemIcon><LogoutIcon/></ListItemIcon>
                            <ListItemText primary={t('menu_logout')} />
                        </ListItem>
                    </React.Fragment>
                )}
                {!isAuth && (
                    <React.Fragment>
                        <Divider />
                        <ListItem button key={"DrawerLoginItem"} component="a" href="/login">
                            <ListItemIcon><LoginIcon/></ListItemIcon>
                            <ListItemText primary={t('menu_login')} />
                        </ListItem>
                    </React.Fragment>
                )}
            </Drawer>
        </Container>
    );
};
export default withTranslation()(Header);