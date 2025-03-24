import React from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BsQuestionCircle } from "react-icons/bs";
import "./Header.css";

const header = ({toggleSidebar}) => {
    return (
        <header className="app-header">
            {/* sidebar */}
            <button className='side-bar' onClick={toggleSidebar}>
                <FaBarsStaggered size={20} />
            </button>

            {/* Right Side */}
            <div className='right-icons'>
                <button className="q-circle">
                    <BsQuestionCircle size={20} />
                </button>
                <button className="icon-button">
                    <CgProfile size={20} />
                </button>
            </div>
        </header>
    );
};

export default header;