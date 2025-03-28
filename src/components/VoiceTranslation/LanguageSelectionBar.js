import React, { useState } from 'react';
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const LanguageSelectionBar = () => {
    const [lang1, setLang1] = useState("English");
    const [lang2, setLang2] = useState("Spanish");

    // Function to swap languages
    const swapLanguages = () => {
        setLang1(lang2);
        setLang2(lang1);
    };

    return (
        <div className="language-selection-bar">
            <select value={lang1} onChange={(e) => setLang1(e.target.value)}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
            </select>

            <button className="swap-btn" onClick={swapLanguages}><FaArrowRightArrowLeft /></button>

            <select value={lang2} onChange={(e) => setLang2(e.target.value)}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
            </select>
        </div>
    );
};

export default LanguageSelectionBar;
