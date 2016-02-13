"use strict"

import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import Firebase from "firebase"

import Grid from './Grid.jsx'
import Sidebar from './Sidebar.jsx'
import Toolbar from './Toolbar.jsx'
import _NextLevel from './_NextLevel.jsx'
import _MenuButton from './_MenuButton.jsx'
import _Menu from './_Menu.jsx'
import _Tutorial from './_Tutorial.jsx'
import _Timer from './_Timer.jsx'
import * as style from '../style.js'
import * as action from '../actions.js'
import * as helper from '../helpers/helpers.js'

let ref = new Firebase("https://circlematch.firebaseio.com/")
let originalState = '012345678'
let timerLaunched = false

export class ReactApp extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const { dispatch, gridWidth, cellData, winningCombo, winner, level, modalIsOpen, animations } = this.props
      if (modalIsOpen == true) {
        this.closeModal()
      } else {
        dispatch(action.MOVE_CELLS(gridWidth, cellData, e.keyCode, winningCombo))
      }
    })
  }

  componentDidUpdate(prevProps) {
    const { dispatch, autoSolved, winner, level, modalIsOpen, gridWidth, timeLeft, timerIsRunning, score } = this.props
    if (prevProps.winner == false && winner == true) {
      dispatch(action.OPEN_MODAL())
    } else if (timerIsRunning == false && timeLeft == 60 && timerLaunched == false) {
      this.runTimer()
    }
  }

  runTimer() {
    timerLaunched = true
    let timer = setInterval(() => {
      const { dispatch, timeLeft, winner, modalIsOpen } = this.props
      if (winner == true || parseInt(timeLeft) <= 0 || modalIsOpen == true) {
        clearInterval(timer)
        timerLaunched = false
      } else {
        let newTimeLeft = parseInt(timeLeft) - 1
        dispatch(action.TIMER(newTimeLeft))
      }
    }, 1000)
  }

  closeModal() {
    const { dispatch, autoSolved, gridWidth, level, score, timeLeft } = this.props
    dispatch(action.SET_LEVEL(level + 1, gridWidth, score, timeLeft, autoSolved))
    dispatch(action.CLOSE_MODAL())
  }

  endTutorial() {
    const { dispatch } = this.props
    dispatch(action.END_TUTORIAL())
  }

  openMenu() {
    const { dispatch } = this.props
    dispatch(action.OPEN_MENU())
  }

  closeMenu() {
    const { dispatch } = this.props
    dispatch(action.CLOSE_MENU())
  }

  randomizeColor() {
    const { dispatch, colorScheme } = this.props
    dispatch(action.RANDOMIZE_COLORS(colorScheme))
  }

  toggleBackgroundColor() {
    const { dispatch, colorScheme } = this.props
    dispatch(action.TOGGLE_BACKGROUND_COLOR(colorScheme))
  }

  autoSolve() {
    const { dispatch, autoSolved, cellData, gridWidth, level, score, timeLeft } = this.props
    this.closeMenu()
    dispatch(action.SOLVE_PUZZLE(cellData, level))
  }

  reset() {
    const { dispatch } = this.props
    dispatch(action.RESET())
  }

  render() {
    const {
      animations,
      autoSolved,
      colorScheme,
      cellData,
      gameComplete,
      gridWidth,
      level,
      menuIsOpen,
      menuView,
      modalIsOpen,
      score,
      timerIsRunning,
      timeLeft,
      translations,
      tutorialIsOn,
      winner,
      winningCombo
    } = this.props

    let styles = {
      container: {
        backgroundColor: 'rgb(' + colorScheme.toJS().background + ')',
        minHeight: '100vh'
      },
      modal: {
        backgroundColor: 'none',
        position: 'fixed'
      }
    }

    return (
      <div style={styles.container}>
        <Modal
          isOpen={modalIsOpen} >
          <_NextLevel
            level={level}
            autoSolved={autoSolved}
            colorScheme={colorScheme}
            gameComplete={gameComplete}
            score={score}
            timeLeft={timeLeft}
            reset={() => this.reset()}
            closeModal={() => this.closeModal()} />
        </Modal>
        <br />
        <a href={"https://itunes.apple.com/us/app/circlematch-minimalistic-sliding/id1082737491?ls=1&mt=8"}>
          <img
            src={'src/assets/Download_on_the_App_Store_Badge_US-UK_135x40.svg'}
            alt={'download on the app store'} />
        </a>
        <_Timer
          colorScheme={colorScheme}
          level={level}
          score={score}
          timeLeft={timeLeft} />
        <Grid
          animations={animations}
          gridWidth={gridWidth}
          cellData={cellData}
          colorScheme={colorScheme}
          translations={translations} />
        <_Menu
          level={level}
          menuView={menuView}
          colorScheme={colorScheme}
          score={score}
          autoSolve={() => this.autoSolve()}
          reset={() => this.reset()}
          randomizeColor={() => this.randomizeColor()}
          toggleBackgroundColor={() => this.toggleBackgroundColor()} />
        <br />
        <_Tutorial />
        <br /><br />
        <div>
          <h4>
            CREATED BY <a href="http://christinecha.com">CHRISTINE CHA</a>
            <p>--</p>
            <a href="http://github.com/christinecha">GITHUB</a> •
            <a href="http://twitter.com/christinechanyc">TWITTER</a> •
            <a href="http://instagram.com/christinechanyc">INSTAGRAM</a>
          </h4>
         </div>
         <br /><br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    animations: state.get('animations'),
    autoSolved: state.get('autoSolved'),
    backgroundColor: state.get('backgroundColor'),
    colorScheme: state.get('colorScheme'),
    cellData: state.get('cellData'),
    gameComplete: state.get('gameComplete'),
    gridWidth: state.get('gridWidth'),
    level: state.get('level'),
    menuIsOpen: state.get('menuIsOpen'),
    menuView: state.get('menuView'),
    modalIsOpen: state.get('modalIsOpen'),
    score: state.get('score'),
    timerIsRunning: state.get('timerIsRunning'),
    timeLeft: state.get('timeLeft'),
    translations: state.get('translations'),
    tutorialIsOn: state.get('tutorialIsOn'),
    winningCombo: state.get('winningCombo'),
    winner: state.get('winner')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
