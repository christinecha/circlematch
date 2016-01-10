import React from 'react';

class Cell extends React.Component {

    render() {
        const { position, color, key } = this.props
        let cellColor = color

        const style = {
          gridCell: {
            backgroundColor: cellColor,
            border: '5px solid #eee',
            boxSizing: 'border-box',
            textAlign: 'center',
            width: '33.33%',
            height: '33.33%',
            display: 'inline-block',
            verticalAlign: 'middle',
            borderRadius: '100%'
          },
          innerCell: {
            fontSize: '20px',
            margin: '12px 0'
          }
        }

        return (
          <div style={style.gridCell}>
            <p>{position} {key}</p>
          </div>
        )
    }
}

export default Cell;
