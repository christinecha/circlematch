import * as helper from './helpers.js'

export const moveCells = (gridWidth, cellData, keyCode, winningCombo) => {
  let move = 0
  let animation = ['', '', '', '', '', '', '', '', '']
  let animationCode = ''

  switch (keyCode) {
    case 38: // up arrow
      move = gridWidth
      animationCode = 'move-up .1s 1 ease'
      break
    case 40: // down arrow
      move = -(gridWidth)
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

  let cellDataArray = cellData.split('')
  let emptyCell = cellDataArray.indexOf('0')
  if (helper.moveIsLegal(gridWidth, emptyCell, move)) {
    let movingCell = emptyCell + move
    cellDataArray[emptyCell] = cellDataArray[movingCell]
    cellDataArray[movingCell] = '0'
    animation[emptyCell] = animationCode
  } else {
    // nothing
  }

  const winner = () => {
    for (let i = 0; i < cellDataArray.length; i++) {
      if (cellDataArray[i] != winningCombo[i]) {
        return false
      }
    }
    return true
  }

  return {
    type: 'MOVE_CELLS',
    data: {
      cellData: cellDataArray.join(''),
      winner: winner(),
      animation: animation
    }
  }
}
