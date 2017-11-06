import React, { Component } from 'react'

class FrameRate extends Component {
  render() {
    return (
      <div>
        Frame rate: {'\xa0'}
        <select id='framerate'>
          <option value='29.97'>29.970 fps</option>
          <option value='25' selected>25 fps</option>
          <option value='24'>24 fps</option>
          <option value='23.976'>23.976 fps</option>
        </select>
        {this.props.children}
      </div>
    )
  }
}

export default FrameRate
