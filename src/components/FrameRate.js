import React, { Component } from 'react'
import { connect } from 'react-redux'
import updateFrameRate from '../actions/framerate/update'
import Select from 'react-select-plus';

class FrameRate extends Component {

  handleChange = (e) => {
    const { updateFrameRate } = this.props
    updateFrameRate(e.value)
  }

  render() {
    const { framerate } = this.props

    let options = [
      { value: '30000/1001', label: '29.970 fps' },
      { value: '25', label: '25 fps' },
      { value: '24', label: '24 fps' },
      { value: '24000/1001', label: '23.976 fps' }
    ];

    return (
      <div>
        <strong>Frame rate</strong> {'\xa0'}
        <Select id='framerate' onChange={this.handleChange} value={framerate} options={options} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ framerate }) => ({ framerate })

export default connect(mapStateToProps, { updateFrameRate })(FrameRate)
