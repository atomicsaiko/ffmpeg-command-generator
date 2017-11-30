import React, { Component } from 'react'

class TooltipBox extends Component {

  render() {
    const HEX_WHITE = '#EBEBEB'

    const styles = {
      textarea: {
        fontFamily: 'monospace',
        fontSize: '1em',
        fontWeight: 'bold',
        borderRadius: 6,
        backgroundColor: 'darkgrey',
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
        <textarea
          rows='4'
          cols='50'
          style={styles.textarea}
          value={this.props.command}
          readOnly
          placeholder={`FFmpeg parameter explaination`}>
        </textarea>
      </div>
    )
  }
}

export default TooltipBox
