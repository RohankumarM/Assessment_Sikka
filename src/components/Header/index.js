import React from 'react';
import Logo from './Logo';
import Filter from './Filter';
import Profile from './Profile';

import './style.css';

function Header() {
    return (
        <div className="header">
            <Logo />
            <Filter />
            <Profile />
        </div>
    )
}

export default Header;
