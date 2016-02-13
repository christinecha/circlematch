"use strict"
import React from 'react'
import * as helper from '../helpers/helpers.js'

let compliments = [
  "You're a genius.", "You rock!", "You did it!", "Amazing!", "Woohoo!", "Oh yeah!", "You're so smart!", "Success!", "You rock my socks.", "Killin' it!", "Hip hip, hooray!", "Crushing it!"
]

class _NextLevel extends React.Component {
  render() {
    const {level, colorScheme, closeModal, autoSolved, gameComplete, timeLeft, score} = this.props

    let styles = {
      nextLevel: {
        width           : '100%',
        height          : '100vh',
        paddingTop      : '200px',
        backgroundColor : 'rgba(' + colorScheme.toJS().background + ', .8)',
      },
      text: {
        fontFamily: 'Geo',
        color: '#aaaaaa'
      },
      announcement: {
        fontSize: '20px',
        marginBottom: '30px'
      },
      points: {
        fontSize: '30px',
        color: 'rgba(' + colorScheme.toJS().cell + ', 1)'
      },
      speedBonus: {
        fontSize: '30px',
        color: 'rgba(' + colorScheme.toJS().cell + ', .5)'
      },
      continue: {
        fontSize: '16px'
      },
      button: {
        border          : 'none',
        padding         : '10px 15px',
        backgroundColor : 'rgb(' + colorScheme.toJS().cell + ')',
        borderRadius    : '15px',
        color           : '#fff',
        fontSize        : '18px'
      }
    }

    let announcement = compliments[helper.randomNum(0, compliments.length - 1)]
    let points = 50
    let speedBonus = helper.getPoints(level, timeLeft) - 50
    let levelDisplay = level

    if (autoSolved == true) {
      announcement = 'auto-solved!'
      points = 0
      speedBonus = 0
      levelDisplay = level + 1
    }

    if (gameComplete) {
      return (
        <div style={styles.nextLevel}>
          <div style={styles.points}>you are a champion.</div>
          <div style={styles.announcement}>you beat the whole game!</div>
          <div style={styles.continue}>tap to start over</div>
        </div>
      )
    } else {
      return (
        <div style={styles.nextLevel}>
          <div style={styles.announcement}>{announcement}</div>
          <div style={styles.points}>+ {points} points</div>
          <div style={styles.speedBonus}>+ {speedBonus} speed bonus</div>
          <div style={styles.announcement}>{score + points + speedBonus} PTS &nbsp; | &nbsp; LEVEL {levelDisplay}</div>
        </div>
      )
    }
  }
}

export default _NextLevel
