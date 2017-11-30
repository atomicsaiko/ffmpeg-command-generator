import React, { Component } from 'react'
import { connect } from 'react-redux'
import updateVideoCodec from '../actions/videocodec/update'
import Select from 'react-select-plus';

class VideoCodec extends Component {

  handleChange = (e) => {
    const { updateVideoCodec } = this.props
    updateVideoCodec(e.value)
  }

  render() {
    const { videocodec } = this.props

    let options = [
      { value: 'libx264', label: 'H.264/AVC' },
      { value: 'libx265', label: 'H.265/HEVC' },
      { value: 'proreshq', label: 'Apple ProRes HQ 422' },
      { value: 'mpeg2encoder', label: 'MPEG-2' }
    ];

    return (
      <div>
        <strong>Video codec</strong>
        <Select id='framerate' onChange={this.handleChange} value={videocodec} options={options} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ videocodec }) => ({ videocodec })

export default connect(mapStateToProps, { updateVideoCodec })(VideoCodec)
