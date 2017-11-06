import React, { Component } from 'react'

class FFmpegOutputCommand extends Component {
  render() {
    const styles = {
      input: {
        width: 480,
        height: 160
      }
    }

    return (
      <div>
        <p>FFmpeg generated command line to run: </p>
        <label htmlFor='output' />
        <input
          id='output'
          name='output'
          type='text'
          style={styles.input}
          value={this.props.command}
          placeholder={`ffmpeg -i "input.mov" "output.mxf"`} />
      </div>
    )
  }
}

export default FFmpegOutputCommand
