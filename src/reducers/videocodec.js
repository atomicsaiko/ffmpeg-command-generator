import { UPDATE_VIDEO_CODEC } from '../actions/videocodec/update'

export default (state = '', { type, payload } = {}) => {
  switch(type) {
    case UPDATE_VIDEO_CODEC :
      return payload

    default :
      return state
  }
}
