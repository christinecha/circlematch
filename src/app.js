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
    cellData: []
  }
})

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react')
)
