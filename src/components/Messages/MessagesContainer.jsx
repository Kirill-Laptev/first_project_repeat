import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { dialogsUpdateTextAC, dialogsAddPostAC } from '../../redux/dialogsReducer';
import withAuthRedirect from '../hoc/withAuthRedirectFull';
import { compose } from 'redux';


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect  
)(Messages)


