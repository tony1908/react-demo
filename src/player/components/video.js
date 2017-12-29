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
            handleLoadedMetadata,
            handleSeeking,
            handleSeeked,
            handleTimeUpdate
        } = this.props;

        return (
            <video
                autoPlay={this.props.autoPlay}
                src={this.props.src}
                ref={this.setRef}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onSeeking={handleSeeking}
                onSeeked={handleSeeked}
            />
        )
    }
}

export default Video;