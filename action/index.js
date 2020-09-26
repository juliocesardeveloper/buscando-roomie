const API = ''

export const getRoomsRecents = () => async (dispatch) => {
  try {
    const response = await fetch(`${API}/rooms/recents`)
    const data = await response.json()
    dispatch({
      type: 'ROOMS_RECENTS',
      payload: data.data
    })
  } catch (error) {
    console.log('getRoomById->error', error)
  }
}
