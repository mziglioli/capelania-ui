import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import FacebookBoxIcon from 'mdi-material-ui/FacebookBox';
import InstagramIcon from 'mdi-material-ui/Instagram';
import WhatsappIcon from 'mdi-material-ui/Whatsapp';
import {withTranslation} from "react-i18next";

const Footer = ({t}) => {
    return (
        <footer flex="none" className="my-footer">
            <Typography variant="h6" gutterBottom >
                {t('footer_social_media')}
            </Typography>
            <a display="block" variant="body1" href="#" key={"FacebookBoxIcon"}>
                <FacebookBoxIcon htmlColor="blue" />
            </a>
            <a display="block" variant="body1" href="#" key={"InstagramIcon"}>
                <InstagramIcon htmlColor="red" />
            </a>
            <a display="block" variant="body1" href="#" key={"WhatsappIcon"}>
                <WhatsappIcon htmlColor="green" />
            </a>
        </footer>
    );
}
export default withTranslation()(Footer);