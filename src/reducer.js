import { Map } from 'immutable'

function setInitialState(state, newData) {
  let numOfCells = Math.pow(newData.gridWidth, 2)
  for (var i = 0; i < numOfCells; i++) {
    newData.cellData.push({
      color: '#eee',
      position: i
    })
  }
  // newData.cellData[0].position = ''
  return state.merge(newData)
}

function setState(state, newData) {
  return state.merge(newData)
}

function reducer(state = Map(), action) {
  console.log(action.type)
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return setInitialState(state, action.data)
    case 'HIGHLIGHT_CELL':
      return setState(state, action.data)
    case 'MOVE_CELLS':
      return setState(state, action.data)
  }
  return state
}

export default reducer
