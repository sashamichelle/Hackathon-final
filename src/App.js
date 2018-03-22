import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BitterTitle from './components/Typo/BitterTitle';
import OpenSans from './components/Typo/OpenSans';

class App extends Component {
  render() {
    return (
      <div>
        <BitterTitle type='bolder'>Holo</BitterTitle>
        <BitterTitle type='bold'>Holo</BitterTitle>
        <BitterTitle type='bold-yellow'>Holo</BitterTitle>
        <BitterTitle type='bold-magenta'>Holo</BitterTitle>
        <BitterTitle type='bold-mint'>Holo</BitterTitle>
        <OpenSans type='bold'>Holo</OpenSans>
        <OpenSans type='regular'>Holo</OpenSans>
      </div>
    );
  }
}

export default App;
