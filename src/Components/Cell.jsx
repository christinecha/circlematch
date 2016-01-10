import React from 'react';

class Cell extends React.Component {

    render() {
        const { position } = this.props
        let color = '#00aeef'
        if (position == 0) {
          color = '#eee'
        }

        const style = {
          gridCell: {
            backgroundColor: color,
            textAlign: 'center',
            width: '50px',
            height: '50px',
            margin: '5px',
            display: 'inline-block'
          },
          innerCell: {
            fontSize: '20px',
            margin: '12px 0'
          }
        }

        return (
          <div
            style={style.gridCell}
            onClick={this.props.onCellClick}>
            <p style={style.innerCell}>{position}</p>
          </div>
        )
    }
}

export default Cell;
