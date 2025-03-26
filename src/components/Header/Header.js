import React from 'react';
import { CgProfile } from "react-icons/cg";
import { BsQuestionCircle } from "react-icons/bs";
import "./Header.css";

const header = () => {
    return (
        <header className="app-header">
            <div className="logo">
                <span>Speak</span>Easy
            </div>
            <div className='right-icons'>
                <button className="q-circle">
                    <BsQuestionCircle size={25} />
                </button>
                <button className="icon-button">
                    <CgProfile size={25} />
                </button>
            </div>
        </header>
    );
};

export default header;