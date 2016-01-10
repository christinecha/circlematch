"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.js'
import { AppContainer } from './Components/ReactApp.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as action from './actions.js'

const store = createStore(reducer)

store.dispatch({
  type: 'SET_INITIAL_STATE',
  data: {
    gridWidth: 3,
    cellData: [],
    cellColors: ['#eee', '#a86ed4', '#d3b8bc', '#ffa56c', '#ffe273', '#b1c559', '#ed92a3', '#55bbc8', '#5585c6'],
    level: 1,
    winningCombo: [0, 3, 1, 6, 4, 2, 7, 8, 5],
    winner: false
  }
})

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react')
)
