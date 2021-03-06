import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import PostsContainer from './posts/postsContainer';



const Profile = (props) => {
  {/*props: posts = props.state.profilePage
   props: addPost = function addPost  */}


  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} isAuth={props.isAuth} status={props.status} updateStatus={props.updateStatus} />
      <hr></hr>
      <PostsContainer />
    </div>
  );
}

export default Profile;