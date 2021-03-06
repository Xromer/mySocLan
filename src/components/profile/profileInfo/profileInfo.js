import React from 'react';
import classes from './../Profile.module.css';
import ProfileStatus from './profileStatus';


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <div>Fuck</div>
    }
    // if (!props.isAuth) return <Redirect to={'/login'} />

    return (

        <div className={classes.profile}>
            <div className={classes.myphoto}>

                <img className={classes.logo2} src={props.profile.photos.large != null ? props.profile.photos.large : 'https://pm1.narvii.com/6569/7b98dc403996d3146789d0e6dbbc92dd17d036f2_00.jpg'} />

            </div>
            <div className={classes.aboute_me}>
                <div>
                    Full Name: {props.profile.fullName}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>

            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default ProfileInfo;