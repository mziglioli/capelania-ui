import React from 'react';
import Link from '@material-ui/core/Link';
import {withTranslation} from "react-i18next";
import appStyles from "./Styles";
import Typography from "@material-ui/core/Typography";

const Email = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Typography style={{paddingLeft: '10px'}}>
            {t('Email')}:
            <Link style={{ color: 'blue', paddingLeft: '10px' }} variant="subtitle1" target="_blank" href="mailto:cclpmanchester@gmail.com">
                cclpmanchester@gmail.com
            </Link>
        </Typography>
    );
}
export default withTranslation()(Email);