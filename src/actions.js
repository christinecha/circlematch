import * as helper from './helpers.js'

export const HIGHLIGHT_CELL = (cellData, cellId) => {
  cellData[cellId].color = '#00aeef'
  return {
    type: 'HIGHLIGHT_CELL',
    data: {
      cellData: cellData
    }
  }
}

export const SOLVE_PUZZLE = (cellData, winningCombo, level) => {
  console.log('trying to solve')
  return {
    type: 'SOLVE_PUZZLE',
    data: {
      winner: helper.solvePuzzle(cellData.toJS(),winningCombo.toJS()),
      autoSolved: true,
      level: level - 1
    }
  }
}

export const MOVE_CELLS = (cellData, keyCode, winningCombo) => {
  let move = 0
  switch (keyCode) {
    case 38: // up arrow
      move = 3
      break
    case 40: // down arrow
      move = -3
      break
    case 39: // right arrow
      move = -1
      break
    case 37: // left arrow
      move = 1
      break
  }

  let emptyCell = cellData.indexOf(0)
  if (helper.moveIsLegal(emptyCell, move)) {
    let movingCell = emptyCell + move
    cellData[emptyCell] = cellData[movingCell]
    cellData[movingCell] = 0
  } else {
    // nothing
  }

  const winner = () => {
    for (let i = 0; i < cellData.length; i++) {
      if (cellData[i] != winningCombo[i]) {
        return false
      }
    }
    return true
  }

  return {
    type: 'MOVE_CELLS',
    data: {
      cellData: cellData,
      winner: winner()
    }
  }
}

export const SET_LEVEL = (level) => {
  let newLevel = helper.randomLevel()
  return {
    type: 'SET_LEVEL',
    data: {
      winner: false,
      level: level,
      winningCombo: newLevel,
      modalIsOpen: true
    }
  }
}

export const CLOSE_MODAL = () => {
  return {
    type: 'CLOSE_MODAL',
    data: {
      modalIsOpen: false
    }
  }
}
