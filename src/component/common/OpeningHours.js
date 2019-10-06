import React, {useEffect, useState} from "react";
import {withTranslation} from "react-i18next";
import Typography from '@material-ui/core/Typography';
import {getPublic} from "../webclient/OpeningClient";

const OpeningHours = ({t}) => {
    const [openingList, setOpeningList] = useState([]);

    useEffect(() => {
        findOpening();
    }, []);

    function findOpening() {
        getPublic().then(res => {
            if(res && Object.keys(res).length) {
                setOpeningList(res);
            }
        }).catch(error => {
            //TODO
        });
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Opening Hours:
            </Typography>
            {openingList && openingList.map(res => (
                <Typography key={"opening_"+res.id}>
                    {res.startAm} - {res.endAm} / {res.startPm} - {res.endPm}
                </Typography>
            ))}
        </React.Fragment>
    );
}
export default withTranslation()(OpeningHours);