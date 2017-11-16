import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux'
import updateFrameRate from '../actions/framerate/update'

class FrameRate extends Component {

  handleChange = (event) => {
    const { updateFrameRate } = this.props
    updateFrameRate(event.target.value)
  }

  render() {
    const { framerate } = this.props
    const TOOLTIP = 'Set the output frame rate.<br> Note that this will perform frame rate conversion if source frame rate differs.'

    return (
      <div>
        Frame rate: {'\xa0'}
        <select id='framerate' onChange={this.handleChange} value={framerate}>
          <option label=' '></option>
          <option value='30000/1001'>29.970 fps</option>
          <option value='25'>25 fps</option>
          <option value='24'>24 fps</option>
          <option value='24000/1001'>23.976 fps</option>
        </select>
        <FontAwesome name='info-circle' data-tip={TOOLTIP}/>
        <ReactTooltip place="right" type="info" effect="solid" multiline={true} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ framerate }) => ({ framerate })

export default connect(mapStateToProps, { updateFrameRate })(FrameRate)
