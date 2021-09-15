import React from 'react';
import logo from '../../../assets/images/SikkaLogo.png';

import './style.css';

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <div className="logo_name">Practice Optimizer</div>
        </div>
    )
}

export default Logo;
