import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import {addPostAC, updateTextAC} from '../../../redux/profileReducer';



const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(updateTextAC(text));
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;