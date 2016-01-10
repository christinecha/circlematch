export const HIGHLIGHT_CELL = (cellData, cellId) => {
  cellData[cellId].color = '#00aeef'
  return {
    type: 'HIGHLIGHT_CELL',
    data: {
      cellData: cellData
    }
  }
}

export const MOVE_CELLS = (cellData, keyCode) => {
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
    for (let i = 0; i < cellData.length; i++) {
      if (cellData[i].position == 0) {
        return i
      }
    }
    return null
  }

  let emptyCellId = (findEmptyCell(cellData))
  console.log(emptyCellId, positionChange)
  let movingCellId_1 = emptyCellId + positionChange
  cellData[emptyCellId].position = cellData[movingCellId_1].position
  cellData[movingCellId_1].position = 0
  console.log(cellData)

  return {
    type: 'MOVE_CELLS',
    data: {
      cellData: cellData
    }
  }
}
