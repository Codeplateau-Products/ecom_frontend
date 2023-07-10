import React from 'react';
import '../../assets/css/Footer.css';
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import Services from './Services';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <div>
        
        <Newsletter />
        <FooterLinks />
        <hr />
        <Services />
        <Copyright />
    </div>
  )
}


export default Footer;