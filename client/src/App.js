import React, { Component } from 'react';
import './App.css';
import Header from './app/components/Header'
import Chatbox from './app/components/Chatbox'
class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
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
