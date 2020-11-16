import React from 'react';

const DIALOGS_UPDATE_TEXT = 'DIALOGS_UPDATE_TEXT';
const DIALOGS_ADD_POST = 'IALOGS_ADD_POST';


let initialState = {
    usersData: [
            {id: 1, name: 'Evgeny'},
            {id: 2, name: 'Dmitry'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Nikita'},
            {id: 5, name: 'Polina'},
        ],
    messagesData: [
            {id: 1, message: 'Learn JS'},
            {id: 2, message: 'Samurai'},
            {id: 3, message: 'Yo'},
        ],
    newPostText : ''
}


const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case DIALOGS_UPDATE_TEXT : 
        return {
            ...state,
            newPostText: action.newText
        }

        case DIALOGS_ADD_POST : 
        return {
            ...state,
            newPostText: '',
            messagesData: [...state.messagesData, {id: 4, message: state.newPostText}],
        }
        default:
            return state;
    }
}





export const dialogsUpdateTextAC = (text) => {
    return {type: DIALOGS_UPDATE_TEXT, newText: text}
}

export const dialogsAddPostAC = () => {
    return {type: DIALOGS_ADD_POST}
}


export default dialogsReducer;