import React, { Component } from 'react'

class FileInput extends Component {
  render() {
    return (
      <div>
        <label htmlFor='fileId'>Choose media file to inspect: {'\xa0'}</label>
        <input
          id='fileId'
          name='fileId'
          type='file'
          accept='.mov, .mxf, .mp4'
        />
      </div>
    )
  }
}

export default FileInput
