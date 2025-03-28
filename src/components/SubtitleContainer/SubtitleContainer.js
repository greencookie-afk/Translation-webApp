import React from 'react'
import './SubtitleContainer.css'

const SubtitleContainer = ({orignalText, translatedText}) => {
    return (
        <div className="subtitle-container">
            <p className="original-text">{orignalText}</p>
            <p className="translated-text">{translatedText}</p>
        </div>
    );
};

export default SubtitleContainer