import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { withTranslation } from "react-i18next";

const HeaderMenuItem = ({t, name, endpoint, icon}) => {
    return (
        <ListItem button key={`Drawer_${name}_Item`} component="a" href={endpoint}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={t(name)}></ListItemText>
        </ListItem>
    );
};
export default withTranslation()(HeaderMenuItem);