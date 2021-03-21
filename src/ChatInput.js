import React,{useState} from 'react'
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './stateprovider';
import './chatinput.css'

function ChatInput({channelName,channelId}) {

    const [{user},dispatch] =useStateValue();
    const [input, setInput] = useState('');
    
    const SendMessage = (e) => {
        e.preventDefault();
        if(channelId)
        {
            db.collection('room').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.displayName,
                userimage : user.photoURL
            })
        }
        setInput("");
    }
    return (
        <div className="CahtInput" >
            <form>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder={`Message#${channelName}`}/>
                <button type="submit" onClick={SendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
