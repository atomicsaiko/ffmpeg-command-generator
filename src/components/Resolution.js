import React, { Component } from 'react'

class Resolution extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectValue: 'fhd'
    }
  }

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value })
    this.props.resolution(event.target.value)
  }

  render() {
    return (
      <div>
        Resolution: {'\xa0'}
        <select id='resolution' onChange={this.handleChange} value={this.state.selectValue}>
          <option value='1920x1080'>1920x1080</option>
          <option value='1280x720'>1280x720</option>
          <option value='768x432'>768x432</option>
          {this.props.children}
        </select>
      </div>
    )
  }
}

export default Resolution
