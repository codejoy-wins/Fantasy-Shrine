import React, { Component } from 'react';

import ben from './components/ben.jpg';
import adam from './components/adam.jpg';

import bigben from './components/bigben.jpg';
import cmc from './components/cmc.jpg';
import dhop from './components/dhop.jpg';
import dj from './components/dj.jpg';
import drake from './components/drake.jpg';
import vance from './components/vance.jpeg';
import aaron from './components/aaron.jpg';
import greg from './components/greg.jpg';
import woods from './components/woods.jpg';




import Seif from './components/As';
import './App.css';

class App extends Component {
  
  render() {
    const mySty = {
      "textDecoration": "none",
      "color": 'goldenrod',
    }
    return (
      <div className="App">
        < Seif />
        <img src={ben} className="App-logo" alt="logo" />
        <h2>Big Ben</h2>
        <img src={bigben} className="App-logow" alt="logo" />

        <img src={adam} className="App-logo" alt="logo" />
        <h2>Adam Thielen</h2>
        <img src={adam} className="App-logow" alt="logo" />

        <img src={drake} className="App-logo" alt="logo" />
        <h2>Kenyan Drake</h2>
        <img src={drake} className="App-logow" alt="logo" />

        <img src={dj} className="App-logo" alt="logo" />
        <h2>David Johnson</h2>
        <img src={dj} className="App-logow" alt="logo" />

        <img src={cmc} className="App-logo" alt="logo" />
        <h2>Christian McCaffery</h2>
        <img src={cmc} className="App-logow" alt="logo" />

        <img src={dhop} className="App-logo" alt="logo" />
        <h2>Deandre Hopkins</h2>
        <img src={dhop} className="App-logow" alt="logo" />

        <img src={woods} className="App-logo" alt="logo" />
        <h2>Robert Woods</h2>
        <img src={woods} className="App-logow" alt="logo" />

        <img src={vance} className="App-logo" alt="logo" />
        <h2>Vance McDonald won the farm</h2>
        <img src={vance} className="App-logow" alt="logo" />

        <img src={aaron} className="App-logo" alt="logo" />
        <h2>Aaron Donald</h2>
        <img src={aaron} className="App-logow" alt="logo" />

        <img src={greg} className="App-logo" alt="logo" />
        <h2>Greg Zuerlein</h2>
        <img src={greg} className="App-logow" alt="logo" />



        <header className="App-header">
          <p>
             <a href="https://maxjann.com" style={mySty}>Jann Software</a>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
