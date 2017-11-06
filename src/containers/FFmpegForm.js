import React, { Component } from 'react'
import { connect } from 'react-redux'
import FileInput from '../components/FileInput'
import Resolution from '../components/Resolution'
import FrameRate from '../components/FrameRate'
import VideoCodec from '../components/VideoCodec'
import FFmpegOutputCommand from '../components/FFmpegOutputCode'

class FFmpegForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: 'ProRes_Master.mov',
    }
  }

  generateFFmpegCMD = () => {
    const { input } = this.state
    const { resolution, framerate, videocodec } = this.props

    // Preprocess input to splice the file extension from path

    let baseCMD = [
      'ffmpeg',
      '-i', input,
      '-s', resolution,
      '-r', framerate,
      '-c:v', videocodec,
      `ENC_${input}`
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

const mapStateToProps = ({ resolution, framerate, videocodec }) => ({
  resolution,
  framerate,
  videocodec
})

export default connect(mapStateToProps)(FFmpegForm)
