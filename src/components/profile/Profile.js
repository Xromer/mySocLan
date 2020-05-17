import React from 'react';
import classes from './Profile.module.css';
import Posts from './posts/posts';
import ProfileInfo from './profileInfo/profileInfo';



const Profile = (props) => {
  {/*props: posts = props.state.profilePage
   props: addPost = function addPost  */}


  return (
    <div className={classes.content}>
      <ProfileInfo />
      <hr></hr>
      <Posts posts={props.posts} newPostText={props.posts.newPostText} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;