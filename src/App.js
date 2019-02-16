import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js'
import Language from './Language/Language.js'
import Content from './Content/Content.js'
import ProgressBar from './ProgressBar/ProgressBar.js'
import Footer from './Footer/Footer.js'

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

          <div className="progress_wrapper">
            <ProgressBar />
          </div>

          <div className="footer_wrapper">
            <Footer />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
