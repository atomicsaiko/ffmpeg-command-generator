export const UPDATE_RESOLUTION = 'UPDATE_RESOLUTION'

export default (resolution) => {
  return {
    type: UPDATE_RESOLUTION,
    payload: resolution
  }
}
