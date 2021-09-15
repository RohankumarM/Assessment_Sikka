import React from 'react';
import LeftSubHeader from './LeftSubHeader';
import RightSubHeader from './RightSubHeader';

import './style.css';

function SubHeader() {
    return (
        <div className="subheader">
            <LeftSubHeader />
            <RightSubHeader />
        </div>
    )
}

export default SubHeader;
