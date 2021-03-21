import React from 'react'
import './header.css';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime'; 
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './stateprovider';

function Header() {
    const [{user},dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <Avatar 
                className="header_avatar"
                 src={user?.photoURL} 
                 alt={user?.dispalyName} />
                <AccessTimeIcon/>
            </div>
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder="search something"/>
            </div>
            <div className="header_right">
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
