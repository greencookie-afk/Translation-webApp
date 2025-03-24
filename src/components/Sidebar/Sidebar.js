import React from 'react';
import "./Sidebar.css";

const Sidebar = ({ setRightPanelView, isVisible, closeSidebar }) => {
    return (
        <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
            <button className='history-btn' onClick={() => { setRightPanelView('history'); closeSidebar(); }}>History</button>
            <button className='settings-btn' onClick={() => { setRightPanelView('settings'); closeSidebar(); }}>Settings</button>
            <button className='contact-btn' onClick={() => { setRightPanelView('contact us'); closeSidebar(); }}>Contact Us</button>
        </div>
    );
};

export default Sidebar;