import React, { Component } from 'react'
import { connect } from 'react-redux'
import FileInput from '../components/FileInput'
import Resolution from '../components/Resolution'
import FrameRate from '../components/FrameRate'
import VideoCodec from '../components/VideoCodec'
import FFmpegOutputCommand from '../components/FFmpegOutputCode'
import TooltipBox from '../components/TooltipBox'
import 'react-select-plus/dist/react-select-plus.css';

class FFmpegForm extends Component {

  generateFFmpegCMD = () => {
    const { fileinput, resolution, framerate, videocodec } = this.props

    let baseCMD = [
      'ffmpeg',
      '-i', `"${fileinput}"`,
      '-s', resolution,
      '-r', framerate,
      '-c:v', videocodec,
      `"ENC_${fileinput}"`
    ]

    return baseCMD.join(' ')
  }

  validateFileInput = (fileinput) => {
    if (fileinput.search('/') !== -1) {
      let filename = fileinput.split('/')
      return filename[filename.length-1]
    } else {
      let filename = fileinput.split('\\')
      return filename[filename.length-1]
    }
  }

  render() {
    const styles = {
      div: {
        maxWidth: 340,
        margin: 'auto'
      }
    }
    return (
      <div>
        <div style={styles.div}>
        <FileInput />
        <Resolution>
          <option value='640x360'>640x360</option>
        </Resolution>
        <FrameRate />
        <VideoCodec />
      </div>
        <FFmpegOutputCommand command={this.generateFFmpegCMD()} />
        <TooltipBox />
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
