// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  handleClickBitrate = (event) => {

    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleClickReso = (event) => {

    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClickBitrate} className="bitrate">Change bitrate</button>
        <button onClick={this.handleClickReso} className="resolution">Change resolution</button>
      </div>

    )

  }


}

export default YouTubeDebugger
