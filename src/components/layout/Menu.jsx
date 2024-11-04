import './Menu.css';
import React from 'react';
//import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/">Sobre</a></li>                
                </ul>
            </nav>
        </aside>
    );
};

export default Menu