import React from 'react';
import './video-player-controls.css'

const VideoPLayerControls = props => (
    <div className="VideoPLayerControls" >
        {props.children}
    </div>
)

export default VideoPLayerControls;