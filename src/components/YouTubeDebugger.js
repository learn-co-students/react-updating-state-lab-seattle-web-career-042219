import React from 'react'

export default class YoutubeDebugger extends React.Component{
    constructor(){
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
    handleClick = e =>{
        e.persist()
        if(e.target.className==='bitrate'){
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
            }, ()=>{console.log(this.state.settings.bitrate)})
        }else{
        this.setState({
            settings:{
                ...this.state.settings, 
                video:{
                    resolution: '720p'
                }
            }
            }, ()=>{console.log(this.state.settings.video.resolution)})
    }

    }
    render(){
        return (
        <div>
         <button className="bitrate" onClick={this.handleClick}>Change Bitrate</button>
         <button className="resolution" onClick={this.handleClick}>Change Resolution</button>
        </div>)}
}