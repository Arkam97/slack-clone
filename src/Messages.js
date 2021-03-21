import React from 'react';
import './messages.css';

function Messages({userimage, user, timestamp, message}) {
    return (
        <div className="messages">
            <img src={userimage} alt=""/>
            <div className="message_info">
                <h4>{user}<span className="timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
