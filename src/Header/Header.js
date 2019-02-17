import React from 'react';
import "./Header.css"
import l2_logo from './img/l2_logo.png'

const Header = () => {
    return (
        <a href="https://lineage2.com" target="blank"> 
        <div>
           <div className="logo">
                {/* <h1>Lineage &#64;</h1> */}
                <img src={l2_logo} alt="#"></img>
                <p>The chaotic chronicle</p>
            </div>
        </div>
        </a>
    );
}

export default Header;

