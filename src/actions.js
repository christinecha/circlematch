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

export const SOLVE_PUZZLE = (cellData, winningCombo) => {
  console.log('?')
  return {
    type: 'SOLVE_PUZZLE',
    data: {
      winner: helper.solution(cellData,winningCombo)
    }
  }
}

export const MOVE_CELLS = (cellData, keyCode, winningCombo) => {
  let positionChange = 0
  switch (keyCode) {
    case 38: // up arrow
      positionChange = 3
      break
    case 40: // down arrow
      positionChange = -3
      break
    case 39: // right arrow
      positionChange = -1
      break
    case 37: // left arrow
      positionChange = 1
      break
  }

  const findEmptyCell = (cellData) => {
    for (var i = 0; i < cellData.length; i++) {
      if (cellData[i].position == 0) {
        return i
      }
    }
    return null
  }

  let emptyCellId = (findEmptyCell(cellData))
  if (([2, 5, 8].indexOf(emptyCellId) >= 0) && (keyCode == 37)) {
    console.log('illegal')
    positionChange = 0
  } else if (([0, 3, 6].indexOf(emptyCellId) >= 0) && (keyCode == 39)) {
    console.log('illegal')
    positionChange = 0
  }
  let movingCellId_1 = emptyCellId + positionChange
  cellData[emptyCellId].position = cellData[movingCellId_1].position
  cellData[movingCellId_1].position = 0

  const winner = () => {
    for (let i = 0; i < cellData.length; i++) {
      if (cellData[i].position != winningCombo[i]) {
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
