import React, { useState } from 'react';
import './VoiceTranslationPanel.css';
import SubtitleContainer from '../SubtitleContainer/SubtitleContainer';
import micIcon from '../../assets/svgs/MIC-ON-OFF.svg';
import LanguageSelectionBar from './LanguageSelectionBar';


const VoiceTranslationPanel = () => {
    const [originalText1, setOriginalText1] = useState("");
    const [translatedText1, setTranslatedText1] = useState("");
    const [originalText2, setOriginalText2] = useState("");
    const [translatedText2, setTranslatedText2] = useState("");

    return (
        <div className="voice-translation-panel">
            <LanguageSelectionBar />
            <div className="subtitles-wrapper">
                <div className="subtitle-with-mic">
                    <h1 className="person-1">Person 1</h1>
                    <SubtitleContainer originalText={originalText1} translatedText={translatedText1} />
                    <img src={micIcon} alt="microphone" className="mic-icon" />
                </div>
                <div className="subtitle-with-mic">
                    <h1 className="person-2">Person 2</h1>
                    <SubtitleContainer originalText={originalText2} translatedText={translatedText2} />
                    <img src={micIcon} alt="microphone" className="mic-icon" />
                </div>
            </div>
        </div>
    );
};

export default VoiceTranslationPanel;

