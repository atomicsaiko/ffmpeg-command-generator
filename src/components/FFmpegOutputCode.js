import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AlertContainer from 'react-alert'

class FFmpegOutputCommand extends Component {

  alertOptions = {
    offset: 14,
    position: 'bottom right',
    theme: 'dark',
    time: 2000,
    transition: 'fade'
  }

  showCopyAlert = () => {
    this.msg.show('FFmpeg command line copied to clipboard', {
      type: 'success'
    })
  }

  showEmailAlert = (dummy) => {
    this.msg.show(`Email send to dummy@dummy.org`, {
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
        height: 80,
        outline: 'none'
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
            readOnly
            placeholder={`ffmpeg -i "input.mov" "output.mxf"`}>
          </textarea>
          <CopyToClipboard text={this.props.command}>
            <div>
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
              <button onClick={this.showCopyAlert} style={styles.button}>Copy</button>
              <button onClick={this.showEmailAlert} style={styles.button}>Email instruction</button>
              <a
                href='http://ffmpeg.org/download.html'
                target='_blank'
                rel='noopener noreferrer'
                style={styles.button}>Download FFmpeg</a>
            </div>
          </CopyToClipboard>
      </div>
    )
  }
}

export default FFmpegOutputCommand
