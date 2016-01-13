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
  helper.solvePuzzle(cellData.toJS(),winningCombo.toJS())
  return {
    type: 'SOLVE_PUZZLE',
    data: {
      winner: true,
      autoSolved: true,
      level: level - 1
    }
  }
}

export const MOVE_CELLS = (cellData, keyCode, winningCombo, animation) => {
  let move = 0
  animation = ['', '', '', '', '', '', '', '', '']
  let animationCode = ''

  switch (keyCode) {
    case 38: // up arrow
      move = 3
      animationCode = 'move-up .1s 1 ease'
      break
    case 40: // down arrow
      move = -3
      animationCode = 'move-down .1s 1 ease'
      break
    case 39: // right arrow
      move = -1
      animationCode = 'move-right .1s 1 ease'
      break
    case 37: // left arrow
      move = 1
      animationCode = 'move-left .1s 1 ease'
      break
  }

  let emptyCell = cellData.indexOf(0)
  if (helper.moveIsLegal(emptyCell, move)) {
    let movingCell = emptyCell + move
    cellData[emptyCell] = cellData[movingCell]
    cellData[movingCell] = 0
    animation[emptyCell] = animationCode
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
      winner: winner(),
      animation: animation
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
      modalIsOpen: true,
      autoSolved: false
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
