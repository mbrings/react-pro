/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className = "navbar">
                <ul className = "navbar-list">
                    <li className = "navbar-item">
                        <a href = "#"> acceuille</a>  
                    </li>
                    <li className = "navbar-item">
                        <a href = "#"> actu</a>  
                    </li>
                    <li className = "navbar-item">
                        <a href = "#"> technique</a>  
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;