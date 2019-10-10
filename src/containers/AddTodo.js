import React from 'react';
// 2. DISPATCH
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../App.css';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className='input' ref={node => input = node} />
        <button className='add-button' type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};

export default connect()(AddTodo);
