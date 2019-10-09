import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListContainer from './components/ListContainer';
import rootReducer from './reducers';
import './App.css';


export default class App extends Component {
  render() {
    const store = createStore(rootReducer)
    return (
      <div className='app'>
        <h1 className='header'>To Do List</h1>
        <Provider store={store}>
          <ListContainer />
        </Provider>
      </div>
    );
  }
}
