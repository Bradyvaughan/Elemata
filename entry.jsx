import Cell from './cell';
import Row from './row';
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'

window.Cell = Cell;
window.Row = Row;

document.addEventListener('DOMContentLoaded', () => {
  window.grid = [];
  ReactDOM.render(<Root/>, document.getElementById('root'))
})
