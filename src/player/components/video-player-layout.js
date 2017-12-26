import React from 'react';
import './video-player-layout.css'

const VideoPLayerLayout = props => {
    return (
        <div className="VideoPlayer">
            {props.children}
        </div>
    )
}

export default VideoPLayerLayout;