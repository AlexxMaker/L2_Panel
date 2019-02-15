import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js'
import Language from './Language/Language.js'
import Content from './Content/Content.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="header-wrapper">
            <Language />
            <Header />
          </div>

          <div className="content_wrapper">
            <Content />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
