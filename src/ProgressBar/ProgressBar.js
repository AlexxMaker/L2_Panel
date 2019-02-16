import React, { Component } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    return (
        <div className="progress_bar">
            <div className="progress_signs">
               <h3>1111</h3>
            </div>

            <div className="progress_lines">
                <div className="progress_line">
                    
                </div>

                <div className="progress_line">
                    
                </div>
            </div>

            <div className="progress_buttons">
                <div className="progress_button">
                    Я залупа
                </div>

                <div className="progress_button">
                    CANCEL
                </div>
            </div>

            <div className="progress_play">
                <img></img>
                PLAY
            </div>
        </div>
    );
}

export default ProgressBar;