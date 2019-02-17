import React from 'react';
import './ProgressBar.css';
import shield from "./img/shield.svg"

const ProgressBar = () => {
    return (
        <div className="progress_bar">
            <div className="progress_signs">
               <h3>DWM FILE</h3>
               <h3>PROGRESS</h3>
            </div>

            <div className="progress_lines">
                <div className="progress_line">
                    
                </div>

                <div className="progress_line">
                    
                </div>
            </div>

            <div className="progress_buttons">
                <div className="progress_button">
                    CHECK
                </div>

                <div className="progress_button">
                    CANCEL
                </div>
            </div>

            <div className="progress_play">
                <img src={shield} alt="#"></img>
                <h1>PLAY</h1>
            </div>
        </div>
    );
}

export default ProgressBar;