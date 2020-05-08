import React from 'react';
import {withTranslation} from "react-i18next";
import {Alert, AlertTitle} from "@material-ui/lab";

const CovidAlert = ({ t }) => {
    return (
        <Alert severity="warning">
            <AlertTitle>{t('covidTitle')}</AlertTitle>
            {t('covidDescription')}
        </Alert>
    );
};
export default withTranslation()(CovidAlert);