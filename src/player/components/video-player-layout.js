import React from 'react';
import './video-player-layout.css'

const VideoPLayerLayout = props => {
    return (
        <div 
            className="VideoPlayer"
            ref={props.setRef}
        >
            {props.children}
        </div>
    )
}

export default VideoPLayerLayout;