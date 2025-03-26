import React from 'react';
import './VoiceTranslationPanel.css';
import { motion } from "framer-motion"
import { IoMicCircleSharp } from "react-icons/io5";
import { IoMicOffCircleSharp } from "react-icons/io5";

const dotVariants = {
    jump: {
        y: -30,
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    },
};

const VoiceTranslationPanel = () => {
    const [isListening, setIsListening] = React.useState(false);
    
    const handleMicClick = () => {
        setIsListening(prev => !prev);
    };

    return (
        <section className="voice-translation-panel">
            <div className="translation-display">
            </div>
            <div className="voice-translation-input">
                <button
                    className={`voice-input-button ${isListening ? 'active' : ''}`}
                    onClick={handleMicClick}
                >
                    {isListening ? <IoMicCircleSharp /> : <IoMicOffCircleSharp />}
                </button>
            </div>

            {isListening && (
                <motion.div
                    animate="jump"
                    transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
                    className="container"
                >
                    <motion.div className="dot" variants={dotVariants} />
                    <motion.div className="dot" variants={dotVariants} />
                    <motion.div className="dot" variants={dotVariants} />
                </motion.div>
            )}
        </section>
    );
};

export default VoiceTranslationPanel;
