import React, {useEffect, useState} from "react";
import {withTranslation} from "react-i18next";
import Typography from '@material-ui/core/Typography';
import {getPublic} from "../webclient/OpeningClient";

const OpeningHours = ({t}) => {
    const [openingResponse, setOpeningResponse] = useState([]);

    useEffect(() => {
        findOpening();
    }, []);

    function findOpening() {
        getPublic().then(res => {
            if(res && res.openings && Object.keys(res.openings).length) {
                setOpeningResponse(res);
            }
        }).catch(error => {
            //TODO
        });
    }
    function getMondayTime() {
        let monday = openingResponse.openings.filter(op => op.day === "MONDAY")[0];
        return buildTime(monday);
    }
    function getSaturdayTime() {
        let saturday = openingResponse.openings.filter(op => op.day === "SATURDAY")[0];
        return buildTime(saturday);
    }
    function getSundayTime() {
        let sunday = openingResponse.openings.filter(op => op.day === "SUNDAY")[0];
        return buildTime(sunday)
    }
    function buildTime(op) {
        return op.startAm + "-" + op.endAm + " / " + op.startPm + " - " + op.endPm;
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Opening Hours:
            </Typography>
            {openingResponse && openingResponse.allDay && (
                <Typography key="opening_allday">
                    {t('day_all')}: {getSundayTime()}
                </Typography>
            )}
            {openingResponse && !openingResponse.allDay && openingResponse.mondayToFriday && (
                <React.Fragment>
                    <Typography key="opening_mondayToFriday">
                        {t('day_Mon_Fri')}: {getMondayTime()}
                    </Typography>
                    <Typography key="opening_Saturday">
                        {t('day_SATURDAY')}: {getSaturdayTime()}
                    </Typography>
                    <Typography key="opening_Sunday">
                        {t('day_SUNDAY')}: {getSundayTime()}
                    </Typography>
                </React.Fragment>
            )}
            {openingResponse && !openingResponse.allDay && !openingResponse.mondayToFriday && openingResponse.openings && openingResponse.openings.map(res => (
                <Typography key={"opening_"+res.id}>
                    {t('day_'+res.day)}: {res.startAm} - {res.endAm} / {res.startPm} - {res.endPm}
                </Typography>
            ))}
        </React.Fragment>
    );
}
export default withTranslation()(OpeningHours);