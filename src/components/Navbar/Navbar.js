import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineHistory } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <GrHomeRounded className="navbar-icon" />
                </li>
                <li className="navbar-item">
                    <MdOutlineHistory className="navbar-icon" />
                </li>
                <li className="navbar-item">
                    <FaGithub className="navbar-icon" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
