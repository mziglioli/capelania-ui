import React from 'react';
import {withTranslation} from "react-i18next";
import appStyles from "./Styles";
import { Link, Typography } from "@material-ui/core";

const Phone = ({ t, props }) => {
    const classes = appStyles();
    return (
        <Typography style={{paddingLeft: '10px'}}>
            {t('Phone')}:
            <Link style={{ color: 'gray', paddingLeft: '10px' }} variant="subtitle1" target="_blank" href="tel:07448861968">
                07467123852
            </Link>
        </Typography>
    );
};
export default withTranslation()(Phone);