import React, { Component } from 'react'

class VideoCodec extends Component {
  render() {
    return (
      <div>
        Video codec: {'\xa0'}
        <select id='framerate' defaultValue=' '>
          <option label=' '></option>
          <option value='libx264'>H.264</option>
          <option value='libx265'>H.265</option>
          <option value='proreshq'>Apple ProRes HQ 422</option>
          <option value='xdcamhd'>XDCAM HD422</option>
        </select>
        {this.props.children}
      </div>
    )
  }
}

export default VideoCodec
