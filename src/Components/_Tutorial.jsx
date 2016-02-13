"use strict"

import React from 'react'
import * as helper from '../helpers/helpers.js'

let styles = {
  container: {
    height: '100%',
  },
  div: {
    fontFamily: 'Geo',
    color: '#aaaaaa',
    height: '100%'
  },
  large: {
    fontSize: 20
  }
}

class _Tutorial extends React.Component {


  displaySteps() {
    return steps.map((step, i) => {
      return (
        <div style={styles.container}>
          <div style={step.styles[0]}>{step.messages[0]}</div>
          <div style={step.styles[1]}>{step.messages[1]}</div>
        </div>
      )
    })
  }

  render() {
    const {level, closeModal, colorScheme, autoSolved, score, timeLeft} = this.props

    return (
      <div style={styles.container}>
        <div style={[styles.div, styles.large]}>use arrow keys to move the circles</div>
        <div style={styles.div}>rearrange them from lightest to darkest, left to right, to win each round</div>
      </div>
    )
  }
}


export default _Tutorial
