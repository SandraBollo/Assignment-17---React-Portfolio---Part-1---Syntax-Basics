import React, { Component } from 'react';
import  PortafolioFixed  from './components/PortafolioFixed.js'
import  PortafoliContent from './components/PortafoliContent.js'

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortafolioFixed />
        <PortafoliContent />
      </div>
    );
  }
}

export default App;
