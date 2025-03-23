import React from 'react';
import './RightPanel.css';

const RightPanel = ({ view }) => {
    return (
        <div className="right-panel">
            {view === 'history' && <div>History Content</div>}
            {view === 'settings' && <div>Settings Content</div>}
            {view === 'contact us' && <div>Contact Us Content</div>}
        </div>
    );
};

export default RightPanel;
