import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './home.css'

const styles = makeStyles((theme) => ({
  footer: {
    marginTop:'56px',
    
    padding: theme.spacing(6),
    background:"light-blue",
  },
  icon: {
    margin: '15px'
  }
}))

const Footer = () => {
  const classes = styles()
  return (
    <>

<div className='gpt3__cta'>
           <div className='gpt3__cta-content'>
               
               <h3>Thanks For Visiting Easy Mart . Makes Sell and Purchase Easy !!! </h3>
           </div>
           <div className='gpt3__cta-btn'>
               <button type='button'>Get Started</button>
           </div>
        </div>
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        © 2022 Easy Mart. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        <InstagramIcon fontSize="large" className={classes.icon} />
        <LinkedInIcon fontSize="large" className={classes.icon} />
        <FacebookIcon fontSize="large" className={classes.icon} />
        <TwitterIcon fontSize="large" className={classes.icon} />
        <YouTubeIcon fontSize="large" className={classes.icon} />
      </Typography>
    </footer>
   
    </>
  );
};

export default Footer;
