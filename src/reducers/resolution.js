import { UPDATE_RESOLUTION } from '../actions/resolution/update'

export default function(state = '', { type, payload } = {}) {
  switch(type) {
    case UPDATE_RESOLUTION :
      return payload

    default :
      return state
  }
}
