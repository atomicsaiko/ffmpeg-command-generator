import React, { Component } from 'react'
import { connect } from 'react-redux'
import updateFileInput from '../actions/fileinput/update'
import ReactFileReader from 'react-file-reader';

class FileInput extends Component {

  handleFiles = files => {
    const { updateFileInput } = this.props
    updateFileInput(files[0].name)
  }

  render() {
    const styles = {
      'div': {
        'width': '100%',
        'height': 34,
        'border': '1px solid #aaa',
        'borderRadius': '4px',
        'textAlign': 'center',
        'lineHeight': 2
      },
      'button': {
        'float': 'right',
        'fontSize': 16,
        'height': 34,
        'background': '#fff',
        'border': '2px solid #000',
        'outline': 'none',
        'cursor': 'pointer'
      }
    }

    return (
      <div>
        <strong>Input file</strong>
        <div style={styles.div}>
          <ReactFileReader handleFiles={this.handleFiles}>
            {this.props.fileinput}
            <button style={styles.button}>Select</button>
          </ReactFileReader>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ fileinput }) => ({ fileinput })

export default connect(mapStateToProps, { updateFileInput })(FileInput)
