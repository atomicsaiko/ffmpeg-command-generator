import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'
import updateFrameRate from '../actions/framerate/update'

class FrameRate extends Component {

  handleChange = (event) => {
    const { updateFrameRate } = this.props
    updateFrameRate(event.target.value)
  }

  render() {
    const { framerate } = this.props

    return (
      <div>
        Frame rate: {'\xa0'}
        <select id='framerate' onChange={this.handleChange} value={framerate}>
          <option label=' '></option>
          <option value='29.97'>29.970 fps</option>
          <option value='25'>25 fps</option>
          <option value='24'>24 fps</option>
          <option value='23.976'>23.976 fps</option>
        </select>
        <FontAwesome name='info-circle' />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ framerate }) => ({ framerate })

export default connect(mapStateToProps, { updateFrameRate })(FrameRate)
