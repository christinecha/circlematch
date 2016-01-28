"use strict"

import Firebase from "firebase"
let ref = new Firebase("https://circlematch.firebaseio.com/")
let originalState = '012345678'

export const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min
}

export const randomLevel = (difficulty, callback) => {
  ref.orderByChild('moveCount').equalTo(5).on('value', (snapshot) => {
    let possibleLevels = []
    snapshot.forEach(childSnapshot => {
      possibleLevels.push(childSnapshot.key())
    })

    return possibleLevels[randomNum(0, possibleLevels.length -1)]
  })
}

export const solvePuzzle = (state) => {
  let moves = []
  ref.child(state).once('value', (snapshot) => {
    let stateObj = snapshot.val()
    let previousMove = state
    let moveCount = 0
    if (state == originalState) {
      moveCount = 0
      console.log('you are already there, silly')
    } else if (stateObj){
      while (stateObj.lastMove) {
        ref.child(previousMove).once('value', (snapshot) => {
          stateObj = snapshot.val()
          previousMove = stateObj.lastMove
          moveCount+= 1
          moves.push(previousMove)
          console.log(moveCount, previousMove)
        })
      }
      return moves
    } else {
      return false
    }
  })
}
