import React from 'react';
import classes from './../Profile.module.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <div>Fuck</div>
    }


    return (
        <div className={classes.profile}>
            <div className={classes.myphoto}>
                <img className={classes.logo2} src={props.profile.photos.large} />
            </div>
            <div className={classes.aboute_me}>
                Opisanie
            </div>
        </div>
    )
}

export default ProfileInfo;