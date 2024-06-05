import React from "react";
import {Avatar} from "@mui/material"
import "./sidebar.css"


function Sidebar(){
    return(
        <div className="sidebar">
             <div className="sidebar_profile">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqrOdi5H4rGdV5O_3cxrJ7xtki5e2YQswMA&usqp=CAU" alt="profile"/>
                   <div className="profile_details">
                      <Avatar />
                      <h4>Padfoot</h4>
                      <p>Student at ABC</p>
                   </div>

                   <div className="profile_stats">
                        <span>Who viewed your profile</span>
                        <span className="stat_number">10</span>
                   </div>

                   <div className="profile_stats">
                        <span>Connection<br/><b>Grow Your Network</b></span>
                        <span className="stat_number">140</span>
                   </div>
            </div>

            <div className="recent">
                 <p>Recent</p>
                 <p className="rec"><span>#</span>AI_ML</p>
                 <p className="rec"><span>#</span>webdevelopment</p>
                 <p className="rec"><span>#</span>programming</p>
                 <p className="rec"><span>#</span>nodejs</p>
                 <p className="rec"><span>#</span>DBMS</p>
                 <p className="rec"><span>#</span>redux</p>

            </div>
        </div>
    )
}
export default Sidebar; 