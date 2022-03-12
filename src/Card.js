import React from 'react';

const Card = (props) => {
    return(
        <div className = "ui card">
            <div className = "image">
                <img src = {props.image}/>
            </div>
            <div className = "content">
                <a href = {props.headerURL} className = "header">
                    {props.header}
                </a>
                <div className = "meta">
                    <span class="date"> {props.date} </span>
                </div>
                <div className = "description">
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default Card;