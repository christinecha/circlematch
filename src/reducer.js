import { Map } from 'immutable'

function setState(state, newData) {
  return state.merge(newData)
}

function reducer(state = Map(), action) {
  console.log(action.type)
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setState(state, action.data)
    case 'TIMER':
      return setState(state, action.data)
    case 'MOVE_CELLS':
      return setState(state, action.data)
    case 'SET_LEVEL':
      return setState(state, action.data)
    case 'CLOSE_MODAL':
      return setState(state, action.data)
    case 'SOLVE_PUZZLE':
      return setState(state, action.data)
    case 'RANDOMIZE_COLORS':
      return setState(state, action.data)
  }
  return state
}

export default reducer
