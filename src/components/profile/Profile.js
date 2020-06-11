import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import PostsContainer from './posts/postsContainer';



const Profile = (props) => {
  {/*props: posts = props.state.profilePage
   props: addPost = function addPost  */}

  debugger;
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} />
      <hr></hr>
      <PostsContainer />
    </div>
  );
}

export default Profile;