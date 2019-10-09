import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Main from './components/Main'
import rootReducer from './reducers'

export default class App extends Component {
  render() {
    const store = createStore(rootReducer)
    return (
      <div className='app'>
        <h1>To Do List</h1>
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}
