import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Todo = ({ onClick, completed, text }) => (
  <li className='todo' onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? 'red' : 'black'}}>
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
