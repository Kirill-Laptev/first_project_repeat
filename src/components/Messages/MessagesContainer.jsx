import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { dialogsUpdateTextAC, dialogsAddPostAC } from '../../redux/dialogsReducer';
import withAuthRedirect from '../hoc/withAuthRedirectFull';


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

let withAuthRedirectComponent = withAuthRedirect(Messages)

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent);
