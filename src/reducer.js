import { Map } from 'immutable'

function setState(state, newData) {
  return state.merge(newData)
}

function reducer(state = Map(), action) {
  console.log(action.type)
  return setState(state, action.data)
}

export default reducer
