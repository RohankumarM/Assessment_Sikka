import React from 'react';
import DrowDownArrow from '../../assets/images/drop-down-arrow.svg';

import './style.css';

function Select({ options, autofocus, border, width, height }) {

    return (
        <div className="select">
            <select
                style={{ width: `${width}px`, height: `${height}` }}
                autoFocus={autofocus}
                className={`select${border ? 'border' : ''}`}>
                {options.map((option, index) => <option key={index}>{option}</option>)}
            </select>
        </div>
    )
}

Select.defaultProps = {
    height: '23px',
    width: '170px'
}


export default Select;
