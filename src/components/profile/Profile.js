import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {   
    return ( 
    <div className={classes.content}>
        <div>
          <img className = {classes.image} src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"/>
        </div>
        <div className={classes.profile}>
          <div clasName = {classes.myphoto}>
            <img  className = {classes.logo2} src="https://logopond.com/logos/b7b61dcf7874fe5b8e97f9b00501a6ca.png"/>
          </div>
          <div className = {classes.aboute_me}>
            Opisanie
          </div>
        </div>
        <div>
          my posts        
          <div>
             New post
          </div>
          <div className={classes.posts}>
            <div className={classes.item}>
              post 1
            </div>
            <div className={classes.item}>
              post 2
            </div>
          </div>
        </div>

    </div>
    );
  }
 
export default Profile;