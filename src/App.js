import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CallToAction from './components/CallToAction';
import ExplainBot from './components/ExplainBot';
import Benefits from './components/Benefits';
import ImgAnalisys from './components/ImgAnalisys';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CallToAction />
      <ExplainBot />
      <Benefits />
    </div>
  );
}

export default App;
