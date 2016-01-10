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
    winningCombo: [1, 0, 2, 3, 4, 5, 6, 7, 8],
    winner: false
  }
})

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react')
)
