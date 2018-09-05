import React, { Component } from 'react';
import './App.css';
import Header from './app/components/Header'
import Chatbox from './app/components/Chatbox'
class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Chatbox></Chatbox>
      </div>
    );
  }
}

export default App;
