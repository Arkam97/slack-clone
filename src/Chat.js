import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import './chat.css';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';
import db from './firebase';
import Messages from './Messages'
import ChatInput from './ChatInput';

function Chat() {
    const {roomId} = useParams();
    const [roomdetails, setRoomdetails] = useState(null)
    const [roommessage, setRoommessage] = useState(null)

    useEffect(() => {

        db.collection("room").doc(roomId).onSnapshot((snapshot) => {
            console.log(snapshot.data());
            setRoomdetails(snapshot.data())
        })

        db.collection("room").doc(roomId).collection("messages")
        .onSnapshot(snp => (
            setRoommessage(snp.docs.map(doc =>(doc.data())))
        ))

    }, [roomId])

    console.log(roomdetails);
    console.log(roommessage);

    return (
        <div className="chat"> 
            <div className="cheat_header">
                <div className="header_left">
                    <h4 className="chanel_name">
                      <strong>#{roomdetails?.name}</strong>
                      <StarOutlineIcon/>  
                    </h4>
                </div>
                <div className="header_right">
                    <p><InfoIcon/>Details</p>    
                </div>
            </div>
            <div className="chat_message">
                {roommessage?.map(({userimage, user, timestamp, message}) =>(
                    <Messages
                      userimage={user?userimage:null}
                      user={user?user:null}
                      timestamp={timestamp?timestamp:null}
                      message={message? message :null}  
                    />)
                )}
            </div>
            <ChatInput channelName={roomdetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat
