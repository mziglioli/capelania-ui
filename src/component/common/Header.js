import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Flag from 'react-world-flags';
import i18n from './../../i18n';
import { withTranslation } from "react-i18next";
import appStyles from "./Styles";

import {useTheme} from '@material-ui/core/styles';
import { AppBar, Container, CssBaseline, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';
import { Contacts as ContactsIcon, Feedback as FeedbackIcon, Home as HomeIcon, Help as HelpIcon, Menu as MenuIcon, Schedule as ScheduleIcon } from '@material-ui/icons';
import { AccountBoxMultiple as AccountBoxMultipleIcon, CalendarMultipleCheck as CalendarMultipleCheckIcon, ChristianityOutline as ChristianityOutlineIcon,  Login as LoginIcon, Logout as LogoutIcon} from 'mdi-material-ui';

import HeaderMenuItem from "./HeaderMenuItem";
import { logout } from "../webclient/AuthClient";

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
        if (preSelectedLanguage && (!preSelectedLanguage.includes("gb") && !preSelectedLanguage.includes("br"))) {
            setFlag("br");
            i18n.changeLanguage("pt");
        } else if (preSelectedLanguage.includes("br")) {
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
                    <img height="55px" width="55px" style={{marginTop: '8px'}} alt="logo da capelania" src={window.location.origin + "/LOGO.png"}  />
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
                <HeaderMenuItem name={"menu_home"} endpoint={"/"} icon={<HomeIcon/>} />
                <HeaderMenuItem name={"menu_about"} endpoint={"/about"} icon={<HelpIcon/>} />
                <HeaderMenuItem name={"menu_adverts"} endpoint={"/adverts"} icon={<CalendarMultipleCheckIcon/>} />
                <HeaderMenuItem name={"menu_contact"} endpoint={"/contact"} icon={<ContactsIcon/>} />
                <HeaderMenuItem name={"menu_masses"} endpoint={"/mass"} icon={<ChristianityOutlineIcon/>} />
                <HeaderMenuItem name={"menu_events"} endpoint={"/events"} icon={<CalendarMultipleCheckIcon/>} />
                {isAuth && (
                    <React.Fragment>
                        <Divider />
                        <HeaderMenuItem name={"menu_masses"} endpoint={"/auth/masses"} icon={<ChristianityOutlineIcon/>} />
                        <HeaderMenuItem name={"menu_feeds"} endpoint={"/auth/feeds"} icon={<FeedbackIcon/>} />
                        <HeaderMenuItem name={"menu_events"} endpoint={"/auth/events"} icon={<CalendarMultipleCheckIcon/>} />
                        <HeaderMenuItem name={"menu_opening"} endpoint={"/auth/opening"} icon={<ScheduleIcon/>} />
                        {user.allRoles.indexOf("ROLE_ADMIN") >= 0 && (
                            <HeaderMenuItem name={"menu_users"} endpoint={"/auth/users"} icon={<AccountBoxMultipleIcon/>} />
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