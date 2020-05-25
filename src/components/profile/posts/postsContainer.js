import { UPDATE_NEW_POST_TEXTActionCreator, ADD_PostActionCreator } from '../../../redux/profile-reducer';
import { connect } from "react-redux";
import Posts from './posts';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(UPDATE_NEW_POST_TEXTActionCreator(text));
        },
        sendPost: () => {
            dispatch(ADD_PostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;