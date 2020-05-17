import React from 'react';
import classes from './../Profile.module.css';
import { UPDATE_NEW_POST_TEXTActionCreator, ADD_PostActionCreator } from '../../../redux/profile-reducer';

const Posts = (props) => {

    debugger;



    let PostsItem = props.posts.posts.map(p => <div>{p.post}</div>);

    let nPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(ADD_PostActionCreator());
    }

    let onPostChange = () => {
        let text = nPostElement.current.value;
        props.dispatch(UPDATE_NEW_POST_TEXTActionCreator(text));
        // props.newPostText
    }

    return (
        <div className={classes.postMenu}>
            <h3> my posts</h3>
            <div className={classes.inputPost}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={nPostElement} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                <div>
                    {PostsItem}
                </div>
            </div>
        </div>
    );
};

export default Posts;