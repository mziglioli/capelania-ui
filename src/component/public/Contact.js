import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {withTranslation} from "react-i18next";
import Hero from "../common/Hero";
import appStyles from "../common/Styles";
import Link from "@material-ui/core/Link";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";
import Phone from "../common/Phone";
import Email from "../common/Email";

const Contact = ({ t, props }) => {
    const classes = appStyles();

    return (
        <Container maxWidth="xl">
            <main>
                <Hero {...props}/>
                <Grid container className={classes.mainContent} key={"gridEvents"}>
                    <Typography className={classes.title} variant="h6" gutterBottom>
                        {t('findInfoHere')}
                    </Typography>
                    <Grid item key={"gridContactForms"} xs={12} md={12} style={{paddingLeft: '10px', paddingRight: '10px'}}>
                        <ExpansionPanel defaultExpanded >
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="contactExpPanel-catequese">
                                <Typography variant="h6" gutterBottom>
                                   {t('catechism')}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Paper elevation={0} >
                                    <Typography>
                                        {t('catechismInfo')}
                                    </Typography>
                                    <Typography style={{fontWeight: 'bold'}}>
                                        {t('pleaseFillForm')}
                                        <Link style={{ color: 'blue' }} variant="subtitle1" target="_blank" href="https://forms.gle/qxhKynuZT5aaJ5yt6">
                                            {t('form')}
                                        </Link>
                                    </Typography>
                                </Paper>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel defaultExpanded={false} >
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="contactExpPanel-batismo">
                                <Typography variant="h6" gutterBottom>
                                    {t('baptism')}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Paper elevation={0} >
                                    <Typography>
                                        {t('baptismInfo')}
                                    </Typography>
                                    <Typography style={{fontWeight: 'bold'}}>
                                        {t('pleaseFillForm')}
                                        <Link style={{ color: 'blue' }} variant="subtitle1" target="_blank" href="https://forms.gle/vpKPZQ7RodX8UQSQ9">
                                            {t('form')}
                                        </Link>
                                    </Typography>
                                </Paper>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel defaultExpanded={false} >
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="contactExpPanel-matrimonio">
                                <Typography variant="h6" gutterBottom>
                                    {t('marriage')}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Paper elevation={0} >
                                    <Typography>
                                        {t('marriageInfo')}
                                    </Typography>
                                    <Typography style={{fontWeight: 'bold'}}>
                                        {t('pleaseFillForm')}
                                        <Link style={{ color: 'blue' }} variant="subtitle1" target="_blank" href="https://forms.gle/vpKPZQ7RodX8UQSQ9">
                                            {t('form')}
                                        </Link>
                                    </Typography>
                                </Paper>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>

                    <Typography className={classes.title} variant="h6" gutterBottom>
                        {t('orContactDirect')}
                    </Typography>
                    <Grid item key={"gridContact"} xs={12} md={12} style={{paddingLeft: '10px', paddingRight: '10px', paddingBottom: '20px'}}>
                        <Phone />
                        <Email />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
};
export default withTranslation()(Contact);