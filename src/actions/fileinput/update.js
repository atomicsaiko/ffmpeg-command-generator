export const UPDATE_FILE_INPUT = 'UPDATE_FILE_INPUT'

export default (fileinput) => {
  // Maybe do some pre-processing here..

  return {
    type: UPDATE_FILE_INPUT,
    payload: fileinput
  }
}
