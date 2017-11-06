export default function(state = '', { type, payload } = {}) {
  switch(type) {
    case 'CHANGE_RESOLUTION' :
      return payload

    default :
      return state
  }
}
