import React from 'react';

import './style.css';

function Info() {
    return (
        <div className="info">
            <div className="info_container">
                <div className="info_sub">
                    <small>Affinity Dental</small>
                    <small className="text_silver">234, Steven Creek, San Jose, CA, 95182</small>
                </div>
            </div>
            <div className="info_container">
                <div className="info_sub">
                    <small className="text_silver">Speciality</small>
                    <small>General Dentist</small>
                </div>
                <div className="info_sub">
                    <small className="text_silver flex_end">Operatories</small>
                    <small className="flex_end">3</small>
                </div>
            </div>

            <div className="info_container">
                <div className="info_sub">
                    <small className="text_silver">Active Patients</small>
                    <small>3,289</small>
                </div>
                <div className="info_sub">
                    <small className="text_silver flex_end">New Patients Per Month</small>
                    <small className="flex_end">50</small>
                </div>
            </div>

            <div className="info_container">
                <div className="info_sub">
                    <small className="text_silver">Recall Patients</small>
                    <small>200</small>
                </div>
                <div className="info_sub">
                    <small className="text_silver flex_end">Patients w/ Treatment Plans</small>
                    <small className="flex_end">3,289</small>
                </div>
            </div>

            <div className="info_container">
                <div className="info_sub">
                    <small className="text_silver">Dentists</small>
                    <small>Dr. Ryan Smith</small>
                    <small>Dr. Tim McCarthy</small>
                </div>
                <div className="info_sub">
                    <small className="text_silver">Speciality</small>
                    <small>General Dentist</small>
                    <small>Pedodontist</small>
                </div>
                <div className="info_sub">
                    <small className="text_silver flex_end">NPI</small>
                    <small className="flex_end">0123456789</small>
                    <small className="flex_end">0123456789</small>
                </div>
            </div>

            <div className="info_container">
                <div className="info_sub">
                    <small className="text_silver">Hygienists</small>
                    <small>Sarah Downstorm</small>
                    <small>Ashley Brown</small>
                </div>
                <div className="info_sub">
                    <small className="flex_end">0123456789</small>
                    <small className="flex_end">0123456789</small>
                </div>
            </div>

            <div className="info_container">
                <div className="info_sub">
                    <small className="text_silver">Practice Management Software</small>
                    <small>Open Dental v21</small>
                </div>
                <div className="info_sub">
                    <small className="text_silver flex_end">Finance Software</small>
                    <small className="flex_end">QuickBooks</small>
                </div>
            </div>

            <div className="info_container">
                <div className="info_sub">
                    <small className="text_silver">Sikka Master Customer ID</small>
                    <small>D62493</small>
                </div>
                <div className="info_sub">
                    <small className="text_silver flex_end">Sikka Practice ID</small>
                    <small className="flex_end">1-1</small>
                </div>
            </div>




        </div>
    )
}

export default Info;
