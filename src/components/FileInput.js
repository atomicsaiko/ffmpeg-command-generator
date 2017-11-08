import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import updateFileInput from '../actions/fileinput/update'

class FileInput extends Component {

  handleChange = (event) => {
    const { updateFileInput } = this.props
    updateFileInput(this.validateFileInput(event.target.value))
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
    return (
      <div>
        <label htmlFor='fileId'>Choose media file to inspect: {'\xa0'}</label>
        <input
          id='fileId'
          name='fileId'
          type='file'
          accept='.mov, .mxf, .mp4'
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ fileinput }) => ({ fileinput })

export default connect(mapStateToProps, { updateFileInput })(FileInput)
