import React, { Component } from 'react';
import './Language.css';
import flag_us from './img/flag_us.png';
import flag_rus from './img/flag_rus.png'

class Language extends Component {
    state = {  }
    render() {
        return (
            <div className="langbar">
                <div className="lang_pill">
                    <img src={flag_us}></img>
                    <p>ENG</p>
                </div>

                <div className="lang_pill">
                    <div>
                        <img src={flag_rus}></img>
                        <p>RUS</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Language;