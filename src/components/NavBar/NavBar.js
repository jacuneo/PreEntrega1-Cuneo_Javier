import React from 'react';
import './navbar.css';
import logo from './logo.svg';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
            <header>
                <a className='nav-logo' href='#'><img src={logo} alt='brand logo navbar'></img></a>
                <nav>
                    <ul className='nav-links'>
                        <li><a href='#'>Mac</a></li>
                        <li><a href='#'>iPad</a></li>
                        <li><a href='#'>iPhone</a></li>
                    </ul>
                </nav>
                <CartWidget />
            </header>
    );
};

export default NavBar;