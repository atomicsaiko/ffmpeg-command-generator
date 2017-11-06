import React, { Component } from 'react'
import { connect } from 'react-redux'
import updateResolution from '../actions/resolution/update'

class Resolution extends Component {

  handleChange = (event) => {
    const { updateResolution } = this.props
    updateResolution(event.target.value)
  }

  render() {
    const { resolution } = this.props

    return (
      <div>
        Resolution: {'\xa0'}
        <select id='resolution' onChange={this.handleChange} value={resolution}>
          <option label=' '></option>
          <option value='1920x1080'>1920x1080</option>
          <option value='1280x720'>1280x720</option>
          <option value='768x432'>768x432</option>
          {this.props.children}
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({ resolution }) => ({ resolution })

export default connect(mapStateToProps, { updateResolution })(Resolution)
