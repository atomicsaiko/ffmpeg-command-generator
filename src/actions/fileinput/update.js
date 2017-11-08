export const UPDATE_FILE_INPUT = 'UPDATE_FILE_INPUT'

export default (fileinput) => {
  return {
    type: UPDATE_FILE_INPUT,
    payload: fileinput
  }
}
