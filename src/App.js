import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import VoiceTranslationPanel from './components/VoiceTranslation/VoiceTranslationPanel';
import RightPanel from './components/RightPanel/RightPanel';
import './App.css';

const App = () => {
  const [rightPanelView, setRightPanelView] = useState('history');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="app">
      <Header toggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)} />
      <div className="app-container">
        <div className="sidebar-container">
          <Sidebar
          setRightPanelView={setRightPanelView}
          isVisible={isSidebarVisible}
          closeSidebar={() => setIsSidebarVisible(false)} />
        </div>
        <div className="voice-panel-container">
          <VoiceTranslationPanel />
        </div>
        <div className="right-panel-container">
          <RightPanel view={rightPanelView} />
        </div>
      </div>
    </div>
  );
}

export default App;
