import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleBitrateChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolutionChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: "720p"
        }
      }
    });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="bitrate"
          onClick={this.handleBitrateChange}
        >
          Change Bitrate
        </button>
        <button
          type="button"
          className="resolution"
          onClick={this.handleResolutionChange}
        >
          Change Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
