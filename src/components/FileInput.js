import React, { Component } from 'react'
import { connect } from 'react-redux'
import updateFileInput from '../actions/fileinput/update'

class FileInput extends Component {
  handleChange = (event) => {
    const { updateFileInput } = this.props
    console.log('The event object: ', event.target.value)
    updateFileInput(event.target.value)
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
