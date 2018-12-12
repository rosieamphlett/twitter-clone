import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
//import './App.css';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
