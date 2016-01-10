"use strict"

import React from 'react'
import { connect } from 'react-redux'
import Grid from './Grid.jsx'

export class ReactApp extends React.Component {
  render() {
    return (
      <div>
        <Grid 
          width={this.props.gridWidth}
          cellData={this.props.cellData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gridWidth: state.get('gridWidth'),
    cellData: state.get('cellData'),
    moveableCells: state.get('moveableCells')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
