import React from 'react';
import Select from '../../../api/Select';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';

import './style.css';

function RightSubHeader() {
    const timeRangeOptions = ["Months"];
    const totalMonthOptions = [24];

    const Month = new Date().getMonth() + 1;
    const todayDate = `${new Date().getFullYear()}-${Month.toString().length === 1 ? '0' + Month : Month}-${new Date().getDate()}`;
    const lastUpdated = `${new Date().getFullYear()}/${Month.toString().length === 1 ? '0' + Month : Month}/${new Date().getDate()}`;

    return (
        <div className="right_sub_header">
            <div className="right_sub_header_top">
                <CheckCircleTwoToneIcon fontSize="small" className="checked" style={{ marginRight: "5px" }} />
                <div className="adjust_font_size">Last updated {lastUpdated}</div>
                <RefreshRoundedIcon fontSize="small" color="primary" />
            </div>

            <div className="subheader_filter">
                <div className="time_range">
                    <div className="adjust_font_size">Time Range in:</div>
                    <Select options={timeRangeOptions} width={80} height={30} border={true} />
                </div>
                <div className="total_months">
                    <div className="adjust_font_size">Total Months</div>
                    <Select options={totalMonthOptions} width={45} height={30} border={true} />
                </div>
                <div className="starting_from">
                    <div className="adjust_font_size">Starting from</div>
                    <input type="date" style={{ width: '125px' }} value={todayDate} />
                </div>
            </div>
        </div>
    )
}

export default RightSubHeader;
