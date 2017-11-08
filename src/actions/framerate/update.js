export const UPDATE_FRAMERATE = 'UPDATE_FRAMERATE'

export default (framerate) => {
  return {
    type: UPDATE_FRAMERATE,
    payload: framerate
  }
}
