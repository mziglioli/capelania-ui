import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import FacebookBoxIcon from 'mdi-material-ui/FacebookBox';
import InstagramIcon from 'mdi-material-ui/Instagram';
import {withTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Divider from "@material-ui/core/Divider";
import Phone from "./Phone";

const Footer = ({t}) => {
    return (
        <React.Fragment>
        <footer flex="none" className="my-footer">
            <Grid container style={{backgroundColor: 'white'}}>
                <Grid item key={"gridFooterAddress"} xs={12} md={12} style={{padding: '10px'}}>
                    <Divider />
                    <div style={{padding: 10}}>
                        <Typography variant="h6" gutterBottom>
                            St Edward R C Church
                        </Typography>
                        <Typography>
                            13 Thurloe St, Manchester M14 5SG
                        </Typography>
                        <Link color="primary" href="https://goo.gl/maps/8bbzqeCmStddYEWS8" target="_blank">
                            {t('footer_map')}
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} style={{padding: '10px'}}>
                    <Typography variant="h6" gutterBottom >
                        {t('footer_social_media')}
                    </Typography>
                    <a display="block" variant="linkToFacebook" href="https://www.facebook.com/people/Capelania-Manchester/100017840144954" target="_blank" rel="noopener noreferrer" key={"FacebookBoxIcon"}>
                        <FacebookBoxIcon htmlColor="blue" fontSize="large"/>
                    </a>
                    <a display="block" variant="linkToInstagram" href="https://www.instagram.com/catolicosemmanchester/?igshid=uoi7cyy1dbkv" target="_blank" rel="noopener noreferrer" key={"InstagramIcon"}>
                        <InstagramIcon htmlColor="red" fontSize="large"/>
                    </a>
                </Grid>
            </Grid>
            <Divider />
            <Grid item key={"gridMass"} style={{padding: '10px'}}>
                <Breadcrumbs separator=" | " aria-label="breadcrumb" style={{padding: '10px'}}>
                    <Link color="inherit" href="/policy">
                        {t('footer_privacy')}
                    </Link>
                    <Link color="inherit" href="/terms">
                        {t('footer_terms')}
                    </Link>
                    <Typography color="textPrimary">Copyright CCLPM</Typography>
                </Breadcrumbs>
            </Grid>
        </footer>
        <p style={{color: "white", position: "fixed"}}>Capelania Manchester, Igreja Católica em Manchester ,Capelania Católica Santa Rita de Cássia é um refúgio para os católicos de língua portuguesa em Manchester Catholic Chaplaincy Portuguese Language in Manchester</p>
        </React.Fragment>
    );
}
export default withTranslation()(Footer);