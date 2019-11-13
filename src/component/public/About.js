import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import Hero from "../common/Hero";
import appStyles from "../common/Styles";

const About = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.mainContent}>
                    <Grid item key={"gridAbout"} xs={12} md={12} style={{padding: '10px'}}>
                        <Typography variant="h6" gutterBottom className={classes.sidebarAboutBox}>
                            {t('about_title')}
                        </Typography>
                        <Typography className={classes.sidebarAboutBox}>
                            {t('intro')}
                        </Typography>
                        <Typography className={classes.sidebarAboutBox}>
                            {t('intro_2')}
                        </Typography>
                        <Typography className={classes.sidebarAboutBox}>
                            {t('intro_about')}
                        </Typography>
                        <Typography className={classes.sidebarAboutBox}>
                            {t('intro_footer')}
                        </Typography>
                    </Grid>
                </Grid>
                {/*<Card key={"EventCard"} style={{maxWidth: '500px'}}>*/}
                {/*    <CardHeader*/}
                {/*        title={"test"}*/}
                {/*    />*/}
                {/*    <CardMedia style={{padding: '10px'}}*/}
                {/*        component="iframe"*/}
                {/*        image={"https://www.youtube.com/embed/C54QUqR2dng"}*/}
                {/*        className={classes.media}*/}
                {/*        title={"test"}*/}
                {/*    />*/}
                {/*</Card>*/}
            </main>
        </Container>
    );
};
export default withTranslation()(About);