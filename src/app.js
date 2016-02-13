"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import { AppContainer } from './components/ReactApp.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as action from './actions.js'

const store = createStore(reducer)

store.dispatch({
  type: 'SET_INITIAL_STATE',
  data: {
    animations: [],
    backgroundColor: '#f1f1f2',
    gameComplete: false,
    gridWidth: 3,
    cellData: '102345678',
    colorScheme: {
      name: 'day',
      cell: '0, 130, 180',
      background: '241, 241, 242'
    },
    level: 1,
    menuIsOpen: false,
    menuView: 'Main.js',
    modalIsOpen: false,
    autoSolved: false,
    score: 0,
    timeLeft: 60,
    timerIsRunning: false,
    tutorialIsOn: true,
    winningCombo: '012345678',
    winner: false
  }
})

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react')
)
