import { UPDATE_FRAMERATE } from '../actions/framerate/update'

export default function(state = '', { type, payload } = {}) {
  switch(type) {
    case UPDATE_FRAMERATE :
      return payload

    default :
      return state
  }
}
