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
    gridWidth: 3,
    cellData: '102345678',
    animation: ['', '', '', '', '', '', '', '', ''],
    cellColor: '#002461',
    level: 1,
    puzzleInfo: ['012345678'],
    winningCombo: '012345678',
    winner: false,
    modalIsOpen: false,
    autoSolved: false,
    timeLeft: 60,
    timerIsRunning: false,
    score: 0
  }
})

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react')
)
