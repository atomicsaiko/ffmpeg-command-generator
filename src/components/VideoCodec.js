import React, { Component } from 'react'
import { connect } from 'react-redux'
import updateVideoCodec from '../actions/videocodec/update'

class VideoCodec extends Component {

  handleChange = (event) => {
    const { updateVideoCodec } = this.props
    updateVideoCodec(event.target.value)
  }

  render() {
    const { videocodec } = this.props

    return (
      <div>
        Video codec: {'\xa0'}
        <select id='framerate' onChange={this.handleChange} value={videocodec}>
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

const mapStateToProps = ({ videocodec }) => ({ videocodec })

export default connect(mapStateToProps, { updateVideoCodec })(VideoCodec)
