import React from 'react'
import "./Sidebar.css"

const Sidebar = ({ setRightPanelView }) => {
    return (
        <div className="sidebar">
            <button className='history-btn' onClick={() => setRightPanelView('history')}>History</button>
            <button className='settings-btn' onClick={() => setRightPanelView('settings')}>Settings</button>
            <button className='contact-btn' onClick={() => setRightPanelView('contact us')}>Contact Us</button>
        </div>
    );
};

export default Sidebar;