import { UPDATE_FILE_INPUT } from '../actions/fileinput/update'

export default function(state = '', { type, payload } = {}) {
  switch(type) {
    case UPDATE_FILE_INPUT :
      return payload

    default :
      return state
  }
}
