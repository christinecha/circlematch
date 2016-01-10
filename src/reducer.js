import { Map } from 'immutable'

function setInitialState(state, newData) {
  let numOfCells = Math.pow(newData.gridWidth, 2)
  for (var i = 0; i < numOfCells; i++) {
    newData.cellData.push({ position: i })
  }
  return state.merge(newData)
}

function setState(state, newData) {
  return state.merge(newData)
}

function reducer(state = Map(), action) {
  console.log(action.type, action.data)
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.data)
    case 'MOVE_CELLS':
      return setState(state, action.data)
    case 'SET_LEVEL':
      return setState(state, action.data)
  }
  return state
}

export default reducer
