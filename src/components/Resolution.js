import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux'
import updateResolution from '../actions/resolution/update'

class Resolution extends Component {

  handleChange = (event) => {
    const { updateResolution } = this.props
    updateResolution(event.target.value)
  }

  render() {
    const { resolution } = this.props
    const TOOLTIP = 'Set output resolution in pixels.<br> For increased coding efficiency a mod16 resolution is preferred.'

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
        <FontAwesome name='info-circle' data-tip={TOOLTIP} />
        <ReactTooltip place="right" type="info" effect="solid" multiline={true} />
      </div>
    )
  }
}

const mapStateToProps = ({ resolution }) => ({ resolution })

export default connect(mapStateToProps, { updateResolution })(Resolution)
