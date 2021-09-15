import React from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import './style.css';

function LeftSubHeader() {
    return (
        <div className="left_sub_header">
            <MenuRoundedIcon className="menu_icon" />
            <div className="practice_profile">Practice Profile</div>
        </div>
    )
}

export default LeftSubHeader;
