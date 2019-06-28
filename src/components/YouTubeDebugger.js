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

	handleClick = (ev) => {
		if (ev.target.className === 'bitrate') {
			this.setState({
				settings: {
					...this.state.settings,
					bitrate: 12
				}
			})
		} else if (ev.target.className === 'resolution') {
			this.setState({
				settings: {
					...this.state.settings,
					video: {
						resolution: "720p"
					}
				}
			})
		}
	}

	render () {
		return (
			<div>
				<button className="bitrate" onClick={this.handleClick}>Change Bitrate: {this.state.settings.bitrate}</button>
				<button className="resolution" onClick={this.handleClick}>Change Resolution: {this.state.settings.video.resolution}</button>
			</div>
		)
	}
}

export default YouTubeDebugger