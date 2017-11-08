import React, { Component } from 'react'

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
      </div>
    )
  }
}

export default FFmpegOutputCommand
