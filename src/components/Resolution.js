import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux'
import updateResolution from '../actions/resolution/update'
import Select from 'react-select-plus';

class Resolution extends Component {

  handleChange = (e) => {
    const { updateResolution } = this.props
    updateResolution(e.value)
  }

  render() {
    const { resolution } = this.props

    let options = [
      { value: '1920x1080', label: '1920x1080' },
      { value: '1280x720', label: '1280x720' },
      { value: '768x432', label: '768x432' },
    ];

    return (
      <div>
        <strong>Resolution</strong>
        <Select id='resolution' onChange={this.handleChange} value={resolution} options={options} >
          {this.props.children}
        </Select>
        {/* <ReactTooltip place="right" type="info" effect="solid" multiline={true} /> */}
      </div>
    )
  }
}

const mapStateToProps = ({ resolution }) => ({ resolution })

export default connect(mapStateToProps, { updateResolution })(Resolution)
