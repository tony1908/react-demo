import React, { Component } from 'react';

class Video extends Component {

    tooglePlay() {
        if(this.props.pause) return this.video.play();
        this.video.pause();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pause !== this.props.pause) return this.tooglePlay();
    }

    setRef = element => {
        this.video = element;
    }

    render() {

        const {
            handleLoadedMetadata
        } = this.props;

        return (
            <video
                autoPlay={this.props.autoPlay}
                src={this.props.src}
                ref={this.setRef}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={this.props.handleTimeUpdate}
            />
        )
    }
}

export default Video;