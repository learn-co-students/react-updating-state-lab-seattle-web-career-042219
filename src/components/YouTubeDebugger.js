// Code YouTubeDebugger Component Here


import React, { Component } from 'react';

class CLASSNAME extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          };
    }

    handleBitrate = () => {
        this.setState({
            settings: {...this.state.settings,
            bitrate: 12
            }
        })
    }
    handleResolution = () => {
        this.setState({
            settings: {...this.state.settings,
                video: {...this.state.settings.video,
            resolution: '720p'
            }
        }
        })
    }

    render() {
        return (<div>
            <button className='bitrate' onClick={this.handleBitrate}>Change Bitrate to 12</button>
            <button className='resolution' onClick={this.handleResolution}>Change resolution to 720p</button>
        </div>)
    }
}

export default CLASSNAME;
