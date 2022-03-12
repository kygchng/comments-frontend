import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className = "comment"> 
            <a href = {props.imageURL} className = "avatar">
                <img alt = "avatar" src = {props.image}/>
            </a>
            <div className = "content">
                <a href = {props.authorURL} className = "author">
                    {props.author}
                </a>
                <div className = "metadata">
                    <span className = "data"> {props.time} </span>
                </div>
                <div className = "text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;