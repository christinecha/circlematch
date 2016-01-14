import * as helper from './helpers.js'

export const moveCells = (cellData, keyCode, winningCombo) => {
  let move = 0
  let animation = ['', '', '', '', '', '', '', '', '']
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
