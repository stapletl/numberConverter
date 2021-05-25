import './RoundSwitch.css';
import React from 'react';

function RoundSwitch() {
    return(
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>
    );
}
export default RoundSwitch;