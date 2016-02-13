"use strict"

import Firebase from "firebase"
let ref = new Firebase("https://circlematch.firebaseio.com/")
let originalState = '012345678'

export const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min
}

export const moveIsLegal = (gridWidth, emptyCell, move) => {
  let numOfCells = gridWidth * gridWidth
  let firstOfRows = []
  let lastOfRows = []
  for (let i = 0; i < gridWidth; i++) {
    firstOfRows.push(gridWidth * i)
    lastOfRows.push((gridWidth * i) - 1)
  }
  if (emptyCell + move < numOfCells && emptyCell + move >= 0){
    if (lastOfRows.indexOf(emptyCell) >= 0 && move == 1) {
      return false
    } else if (firstOfRows.indexOf(emptyCell) >= 0 && move == -1) {
      return false
    } else {
      return true
    }
  }
}

export const getLevel = (moveCount) => {
  // get all possible levels with X difficulty
  return new Promise((resolve, reject) => {
    // let possibleLevels()
    ref.child(moveCount).once('value', (snapshot) => {
      let possibleLevels = Object.keys(snapshot.val())
      let randomLevel = possibleLevels[randomNum(0, possibleLevels.length - 1)]

      getSolution(moveCount, randomLevel).then((response) => {
        resolve({puzzle: randomLevel, puzzleInfo: response})
      })
    })
  })
}

export const getSolution = (moveCount, puzzle) => {
  return new Promise((resolve, reject) => {
    ref.child(moveCount).child(puzzle).once('value', (snapshot) => {
      let puzzleData = snapshot.val()
      resolve(puzzleData)
    })
  })
}

export const getPoints = (level, timeLeft) => {
  let points = 50
  let levelBonus = Math.ceil(level / 3)

  if (timeLeft <= 60 && timeLeft > 55) {
    points += (100 * levelBonus)
  } else if (timeLeft < 56 && timeLeft > 50) {
    points += (50 * levelBonus)
  } else if (timeLeft < 51 && timeLeft > 40) {
    points += (30 * levelBonus)
  } else if (timeLeft < 41 && timeLeft > 30) {
    points += (20 * levelBonus)
  } else if (timeLeft < 31 && timeLeft > 15) {
    points += (10 * levelBonus)
  } else if (timeLeft < 16 && timeLeft > 0) {
    points += (5 * levelBonus)
  }

  return points
}





//
