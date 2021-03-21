import React,{useState,useEffect} from 'react'
import './sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import {useStateValue} from './stateprovider';


function Sidebar() {

    const [{user},dispatch] = useStateValue(); 
    const [chanels, setChanels] = useState([])
    
    useEffect(() => {
     db.collection('room').onSnapshot(snapshot => (
         setChanels(snapshot.docs.map(doc => ({
             id: doc.id,
             name: doc.data().name,
         })))
     ))   
      
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Clever Programmer</h2>
                        <h3>
                        <FiberManualRecordIcon/>
                        {user.displayName}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Chanel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="Peoples & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Chanels "/>
            <hr/>
            <SidebarOption Icon={AddIcon} title="Chanels" addchaneloption/>
            {chanels.map(chanel => ( 
                <SidebarOption  title={chanel.name} id={chanel.id}/>
            ))}

        </div>
    )
}

export default Sidebar
