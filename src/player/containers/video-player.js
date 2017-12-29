import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import '../components/video.css'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
    }

    toogleClick = event => {
        this.setState({
            pause: !this.state.pause
        })
    }
    
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoPlay)
        }) 
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChnage = event => {
        this.video.currentTime = event.target.value;
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    handleVolume = event => {
        this.video.volume = event.target.value;
    }

    handleFullScreen = event => {
        if (!document.webkitIsFullScreen) return this.player.webkitRequestFullScreen()
        document.webkitExitFullscreen();
    }

    setRef = element => {
        this.player = element;
    }

    render() {
        return (
            <div className="Video">
                <VideoPlayerLayout 
                    setRef={this.setRef}
                >
                    <Title
                        title={this.props.title}
                    />
                    <Controls>
                        <PlayPause
                            pause={this.state.pause}
                            handleClick={this.toogleClick}
                        />
                        <Timer
                            duration={this.state.duration} 
                            currentTime={this.state.currentTime}
                        />
                        <ProgressBar 
                            duration={this.state.duration}
                            value={this.state.currentTime}
                            handleChange={this.handleProgressChnage}
                        />
                        <Volume
                            handleVolume={this.handleVolume}
                        />
                        <FullScreen
                            handleFullScreen={this.handleFullScreen}
                        />
                    </Controls>
                    <Spinner
                        active={this.state.loading}
                    />
                    <Video
                        pause={this.state.pause}
                        autoPlay={this.props.autoPlay}
                        handleLoadedMetadata={this.handleLoadedMetadata}
                        handleTimeUpdate={this.handleTimeUpdate}
                        src={this.props.src}
                        handleSeeking={this.handleSeeking}
                        handleSeeked={this.handleSeeked}
                    />
                </VideoPlayerLayout>
            </div>
        )
    }
}

export default VideoPlayer; 