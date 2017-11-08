import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

class FFmpegOutputCommand extends Component {
  render() {
    const styles = {
      textarea: {
        fontFamily: 'monospace',
        fontSize: '1em',
        width: 480,
        height: 160
      }
    }

    return (
      <div>
        <p>FFmpeg generated command line to run: </p>
          <textarea
            rows='4'
            cols='50'
            style={styles.textarea}
            value={this.props.command}
            placeholder={`ffmpeg -i "input.mov" "output.mxf"`}>
          </textarea>
          <CopyToClipboard text={this.props.command}>
            <button>Copy</button>
          </CopyToClipboard>
         <p>Download FFmpeg binary <a href='http://ffmpeg.org/download.html'>here</a>.</p>
      </div>
    )
  }
}

export default FFmpegOutputCommand
