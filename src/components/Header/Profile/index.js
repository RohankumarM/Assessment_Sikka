import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Select from '../../../api/Select';

import './style.css';

function Profile() {
    const options = ["Your Dental Practice"];
    return (
        <div className="profile">
            <FavoriteBorderIcon className="profile_fav" />
            <NotificationsNoneIcon className="profile_notif" />
            <AccountCircleIcon className="profile_acc" />
            <Select options={options} />
        </div>
    )
}

export default Profile;
