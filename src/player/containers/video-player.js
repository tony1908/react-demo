import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import '../components/video.css'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0
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

    render() {
        return (
            <div className="Video">
                <VideoPlayerLayout>
                    <Title
                        title="my video"
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

                        />
                    </Controls>
                    <Video
                        pause={this.state.pause}
                        autoPlay={this.props.autoPlay}
                        handleLoadedMetadata={this.handleLoadedMetadata}
                        handleTimeUpdate={this.handleTimeUpdate}
                        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    />
                </VideoPlayerLayout>
            </div>
        )
    }
}

export default VideoPlayer; 