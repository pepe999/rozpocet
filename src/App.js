import React, { Component } from 'react';
import './App.css';

import { Aplikace } from './containers/Aplikace';


import { Provider } from 'react-redux'
import store from './redux/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Aplikace/>
      </Provider>
    );
  }
}

export default App;
