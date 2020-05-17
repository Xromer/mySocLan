import React from 'react';
import classes from './../Profile.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.myphoto}>
                <img className={classes.logo2} src="https://logopond.com/logos/b7b61dcf7874fe5b8e97f9b00501a6ca.png" />
            </div>
            <div className={classes.aboute_me}>
                Opisanie
            </div>
        </div>
    )
}

export default ProfileInfo;