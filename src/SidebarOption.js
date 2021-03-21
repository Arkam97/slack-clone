import React from 'react'
import './sidebaroption.css';
import {useHistory} from 'react-router-dom';
import db from './firebase';

function SidebarOption({Icon,title,id,addchaneloption}) {

    const history = useHistory();
    const selectChanel = () => {
        if(id)
        {
            history.push(`/room/${id}`)
        }
        else {
            history.push(title)
        }
    }

    const addChanel = () => {
        const channelname = prompt("Enter the Channel name");

        if(channelname)
        {
            db.collection('room').add({
                name: channelname,
            })
        }
    }

    return (
        <div className="sidebaroption" onClick={addchaneloption ? addChanel : selectChanel}>
            {Icon && <Icon fontSize="small" className="sidbaroption_icon"/>}
            {Icon ? (
                <h3>{title}</h3>
            ):
                <h3 className="sidebaroption_chanel"> <span className="sidebar_hash">#</span>{title}</h3>
            }
        </div>
    )
}

export default SidebarOption
