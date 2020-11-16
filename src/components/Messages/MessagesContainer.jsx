import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { dialogsUpdateTextAC, dialogsAddPostAC } from '../../redux/dialogsReducer';


const mapStateToProps = (state) => {
    return {
        usersData: state.messagesPage.usersData,
        messagesData: state.messagesPage.messagesData,
        newPostText: state.messagesPage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(dialogsUpdateTextAC(text));
        },
        addPost: () => {
            dispatch(dialogsAddPostAC());
        }
    }
}



let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;