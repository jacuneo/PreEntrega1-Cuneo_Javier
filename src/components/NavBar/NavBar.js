import React from 'react';
import './navbar.css';
import logo from './logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <div className='navbar navbar-expand-lg'>
                        <div className='container-fluid'>
                            <Link className='navbar-brand' to={"/"}><img src={logo} alt='Apple logo' width='70' /></Link>
                                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='false' aria-label='Toggle navigation'>
                                    <span className='navbar-toggler-icon'></span>
                                </button>

                                    <div className='collapse navbar-collapse' id='navbarNav'>
                                        <ul className='navbar-nav mx-auto'>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' activeclassname='page' to={'/categoria/macbook'}>macbook</NavLink>
                                            </li>
                                            
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' activeclassname='page' to={'/categoria/ipad'}>ipad</NavLink>
                                            </li>

                                            <li className='nav-item'>
                                                <NavLink className='nav-link' activeclassname='page' to={'/categoria/iphone'}>iphone</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                        </div> 
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;