export const UPDATE_VIDEO_CODEC = 'UPDATE_VIDEO_CODEC'

export default (vcodec) => {
  return {
    type: UPDATE_VIDEO_CODEC,
    payload: vcodec
  }
}
