"use strict"

import React from 'react'

class _Menu extends React.Component {

  getMenuOptions() {
    const {colorScheme, autoSolve, randomizeColor, reset, toggleBackgroundColor} = this.props

    let colorMode = colorScheme.toJS().name
    if (colorMode == 'day') {
      colorMode = 'night'
    } else if (colorMode == 'night') {
      colorMode = 'day'
    }

    let menuOptions = [
      {name: 'reset level', action: () => autoSolve()},
      {name: 'randomize color', action: () => randomizeColor()},
      {name: colorMode + ' mode', action: () => toggleBackgroundColor()}
    ]

    let styles = {
      option: {
        width: '220px',
        margin: '5px auto',
        padding: '5px',
        backgroundColor: 'rgb(' + colorScheme.toJS().cell + ')',
        borderRadius: '22px',
        cursor: 'pointer'
      },
      optionText: {
        fontSize: '16px',
        textTransform: 'uppercase',
        fontWeight: 'normal',
        color: '#fff',
        fontFamily: 'Geo'
      }
    }

    return menuOptions.map((option, i) => {
      return (
        <div key={i} className={'menu-option'} style={styles.option} onClick={option.action}>
          <div style={styles.optionText}>{option.name}</div>
        </div>
      )
    })
  }

  render() {
    const {colorScheme, level, score} = this.props

    let styles = {
      container: {
        textAlign: 'center',
        backgroundColor: 'rgba(' + colorScheme.toJS().background + ', .8)'
      },
      div: {
        fontFamily: 'Geo',
        fontSize: 16,
        color: '#888888'
      },
      gameInfo: {
        marginBottom: 20
      },
      continue: {
        marginTop: 30
      }
    }

    return (
      <div style={styles.container}>
        <div style={[styles.div, styles.gameInfo]}>{score} PTS &nbsp; | &nbsp; LEVEL {level}</div>
        {this.getMenuOptions()}
      </div>
    )
  }
}

export default _Menu
