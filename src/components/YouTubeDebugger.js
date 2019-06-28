// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {

	state = {
		errors: [],
		user: null,
		settings: {
			bitrate: 8,
			video: {
				resolution: '1080p'
			}
		}
	}

	handleClickBitrate = (ev) => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	}

	handleClickResolution = (ev) => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					resolution: "720p"
				}
			}
		})
	}

	render () {
		return (
			<div>
				<button className="bitrate" onClick={this.handleClickBitrate}>Change Bitrate: {this.state.settings.bitrate}</button>
				<button className="resolution" onClick={this.handleClickResolution}>Change Resolution: {this.state.settings.video.resolution}</button>
			</div>
		)
	}
}

export default YouTubeDebugger