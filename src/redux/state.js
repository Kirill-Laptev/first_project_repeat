import React from 'react';
import { rerenderEntireTree } from '..';


let state = {
   profilePage: {
       postsData: [
           {text: 'hello', likesCount: 40},
           {text: 'how are you ?', likesCount: 35},
           {text: 'yoyoyo', likesCount: 20},
       ],
       newPostText: '',
   },
}

export let updatePosts = (newText) => {
    let newPost = {
        text: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export let updateNewPostText = (newLetters) => {
    state.profilePage.newPostText = newLetters;
    rerenderEntireTree();
}




window.state = state;


export default state;