import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'

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
        <Textarea
          rows='4'
          cols='50'
          style={styles.textarea}
          value={this.props.command}
          readOnly
          placeholder={`FFmpeg parameter explanation`}>
        </Textarea>
      </div>
    )
  }
}

export default TooltipBox
