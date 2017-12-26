import React from 'react';
import './progress-bar.css'

const ProgressBar = props => (
    <div className="ProgressBar" >
        <input
            type="range"
            min={0}
            max={500}
        />
    </div>
)

export default ProgressBar;