import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { onBoxClick, onDeleteClick } from './states';

class App extends Component {

  state = {
    boxes: [
      {
        id: 0,
      }, {
        id: 1,
      }, {
        id: 2,
      }, {
        id: 3,
      }, {
        id: 4,
      }
    ],
    currentBox: null,
    lastBox: null
  }

  onBoxClick(idx) {
    this.setState(onBoxClick(idx));
  }

  onDeleteClick(id) {
    this.setState(onDeleteClick(id));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {
          this.state.boxes.map((box, idx) => {
            const { id, color } = box;
            return (
              <Box
                key={id}
                id={id}
                onClick={() => this.onBoxClick(idx)}
                onDelete={() => this.onDeleteClick(id)}
                selected={id === this.state.currentBox}
                previous={id === this.state.lastBox}
              />
            );
          })
        }
      </div>
    );
  }
}

const Box = ({id, onClick, onDelete, selected, previous}) => {
  const css = selected ? 'box bg-red' : previous ? 'box bg-yellow' : 'box bg-white';

  return (
    <div className={css}>
      <button className='delete-btn' onClick={() => onClick()}>
        Select
      </button>
      {id}
      <button className='delete-btn' onClick={() => onDelete()}>
        Delete
      </button>
    </div>
  );
};

export default App;
