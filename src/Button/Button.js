import React, { Component } from 'react';
import "./Button.css"

class Button extends Component {
    render() {
        return (
            <div className="btn">
                <p>{this.props.value}</p>
            </div>
        );
    }
}

export default Button;