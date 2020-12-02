import React from 'react';
import style from './Messages.module.css';
import { Redirect } from 'react-router-dom';


const Messages = (props) => {

    if(!props.isAuth){
        return <Redirect to={'/login'} />
    }


    let newText = React.createRef();

    let usersElements = props.usersData.map((el) => {
      return (
        <div>
          <img className={style.avatar} src="https://www.verwin.com/assets/images/user-avatar.png" />
          {el.name}
        </div>
      );
    });

    let messagesElements = props.messagesData.map((el) => {
        return <div className={style.message}>{el.message}</div>
    })


    let onUpdatePost = () => {
        let text = newText.current.value;
        props.updateText(text);
    }

    let onAddPost = () => {
        props.addPost();
    }


    return (
        <div className={style.wrapper}>
        <div className={style.content}>
        <div className={style.users}>
            {usersElements}
        </div>
        <div className={style.messages}>
            {messagesElements}
        </div>
        </div>
        <textarea ref={newText} onChange={onUpdatePost} value={props.newPostText}></textarea>
        <div><button onClick={onAddPost}>Send Message</button></div>
        </div>
    )
}

export default Messages;