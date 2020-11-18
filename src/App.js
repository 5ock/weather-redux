import React, { useState, useEffect} from 'react'
import './App.css';
import BtnWrapper from './components/BtnWrapper'
import WeatherWrapper from './contaners/WeatherWrapper'

function App() {

  return (
    <div className="App">
      <BtnWrapper />
      <WeatherWrapper />
    </div>
  );
}

export default App;
