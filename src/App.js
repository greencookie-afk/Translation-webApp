import React from 'react';
import Header from './components/Header/Header';
import VoiceTranslationPanel from './components/VoiceTranslation/VoiceTranslationPanel';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <VoiceTranslationPanel />
    </div>
  );
}

export default App;
