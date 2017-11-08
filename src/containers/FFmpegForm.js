import React, { Component } from 'react'
import { connect } from 'react-redux'
import FileInput from '../components/FileInput'
import Resolution from '../components/Resolution'
import FrameRate from '../components/FrameRate'
import VideoCodec from '../components/VideoCodec'
import FFmpegOutputCommand from '../components/FFmpegOutputCode'

class FFmpegForm extends Component {

  generateFFmpegCMD = () => {
    const { fileinput, resolution, framerate, videocodec } = this.props

    // Preprocess input to splice the file extension from path

    let baseCMD = [
      'ffmpeg',
      '-i', fileinput,
      '-s', resolution,
      '-r', framerate,
      '-c:v', videocodec,
      `ENC_${fileinput}`
    ]

    return baseCMD.join(' ')
  }

  render() {
    return (
      <div>
        <FileInput />
        <Resolution>
          <option value='640x360'>640x360</option>
        </Resolution>
        <FrameRate />
        <VideoCodec />
        <FFmpegOutputCommand command={this.generateFFmpegCMD()} />
      </div>
    )
  }
}

const mapStateToProps = ({ fileinput, resolution, framerate, videocodec }) => ({
  fileinput,
  resolution,
  framerate,
  videocodec
})

export default connect(mapStateToProps)(FFmpegForm)
