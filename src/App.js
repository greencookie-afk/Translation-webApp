import React from 'react';
import VoiceTranslationPanel from './components/VoiceTranslation/VoiceTranslationPanel';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <VoiceTranslationPanel />
    </div>
  );
}

export default App;
