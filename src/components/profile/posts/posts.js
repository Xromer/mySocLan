import React from 'react';
import classes from './../Profile.module.css';

const Posts = (props) => {



    let PostsItem = props.profilePage.posts.map(p => <div>{p.post}</div>);

    let nPostElement = React.createRef();

    let addPost = () => {
        props.sendPost();
    }

    let onPostChange = () => {
        let text = nPostElement.current.value;
        props.updateNewPostText(text);
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