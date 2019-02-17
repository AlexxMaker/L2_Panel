import React from 'react';
import logo from './img/NCsoft.png'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="foot">
            <a href="https://us.ncsoft.com" target="blank"><img src={logo} alt="#"></img></a>
            <p>©2004 NCSOFT Corporation. All rights reserved. All trademarks are the property of their respective owners.</p>
        </div>
    );
}

export default Footer;