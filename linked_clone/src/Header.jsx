import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Headeroptions from "./Headeroptions";
import "./CSS/header.css";


function Header(){
    return(
        <div className="top">
            <div className="top_left">
                 <div className="top_img">
                       <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="logo"/>
                 </div>
                 <div className="top_search">
                        <SearchIcon/>
                        <input type="text" placeholder="Search"/>
                 </div>
            </div>
            <div className="top_right">
                  <Headeroptions Icon={HomeIcon} title="Home"/>
                  <Headeroptions Icon={PeopleIcon} title="My Network"/>
                  <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
                  <Headeroptions Icon={MessageIcon} title="Messaging"/>
                  <Headeroptions Icon={NotificationsIcon} title="Notifications"/>
                  
            </div>
        </div>
    )
};

export default Header;