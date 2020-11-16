import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostText = React.createRef();


    let postElements = props.postsData.map((el) => {
        return <Post text={el.text} likesCount={el.likesCount} />
    });


    let onUpdateText = () => {
        let text = newPostText.current.value;
        props.updateText(text);
    }


    let onAddText = () => {
        props.addPost();
    }


    return (
        <div>
            <div>My Posts</div>
            <div><textarea ref={newPostText} 
            onChange={onUpdateText} 
            value={props.newPostText}></textarea></div>
            <button onClick={onAddText}>Отправить</button>
            <div>{postElements}</div>
        </div>
    )
}

export default MyPosts;