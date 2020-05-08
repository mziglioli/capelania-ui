import React from 'react';
import {withTranslation} from "react-i18next";
import appStyles from "./Styles";
import {Alert, AlertTitle} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

const CovidAlert = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Alert severity="warning">
            <AlertTitle>{t('covidTitle')}</AlertTitle>
            {t('covidDescription')}
        </Alert>
    );
}
export default withTranslation()(CovidAlert);