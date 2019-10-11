import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <h1 className="header__title">ComposeMusic</h1>
        <header>
            <NavLink to="/" exact={true} className="nav__item">Home</NavLink>
            <NavLink to="/create" className="nav__item" >Composing</NavLink>
            <NavLink to="/about" className="nav__item">About</NavLink>
            <NavLink to="contact" className="nav__item">Contact</NavLink>
        </header>
    </div>
);

export default Header;