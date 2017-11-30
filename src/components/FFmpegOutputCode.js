import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AlertContainer from 'react-alert'
import Textarea from 'react-textarea-autosize'

class FFmpegOutputCommand extends Component {

  alertOptions = {
    offset: 14,
    position: 'bottom right',
    theme: 'dark',
    time: 2000,
    transition: 'fade'
  }

  showCopyAlert = () => {
    this.msg.show('Copied', {
      type: 'success'
    })
  }

  render() {
    const HEX_WHITE = '#EBEBEB'

    const styles = {
      textarea: {
        fontFamily: 'monospace',
        fontSize: '1em',
        fontWeight: 'bold',
        borderRadius: 6,
        backgroundColor: 'black',
        color: HEX_WHITE,
        resize: 'none',
        padding: '1em',
        width: 480,
        outline: 'none'
      }
    }

    return (
      <div>
        <p>FFmpeg generated command line to run: </p>
          <Textarea
            rows='4'
            cols='50'
            style={styles.textarea}
            value={this.props.command}
            readOnly
            placeholder={`ffmpeg -i "input.mov" "output.mxf"`}>
          </Textarea>
          <CopyToClipboard text={this.props.command}>
            <div>
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
              <button onClick={this.showCopyAlert}>Copy</button>
            </div>
          </CopyToClipboard>
        <p>
          Download FFmpeg binary <a
            href='http://ffmpeg.org/download.html'
            target='_blank'
            rel='noopener noreferrer'>here</a>.
        </p>
      </div>
    )
  }
}

export default FFmpegOutputCommand
