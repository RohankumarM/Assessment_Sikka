import React from 'react';
import Select from '../../../api/Select';

import './style.css';

function Filter() {
    const options = ["1. Your Dental Practice"];

    return (
        <div className="filter">
            <div className="filter_desc">Practice(s)</div>
            <Select options={options} autofocus={true} border={true} />
        </div>
    )
}

export default Filter;
