import React from "react";
import {Avatar} from "@mui/material"
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./CSS/feed.css";
import Post from "./Post"
function Feed(){
    return(
       <div className="feed">
             <div className="feed_input">
             <div className="feed_form">
                <Avatar />
                <form>
                    <input type="text" placeholder="Start Posting"/>
                    <input type="submit"/>
                </form>
            </div>
             
             <div className="feed_options">
                <div className="options">
                      <PhotoIcon style={{color:"#70b5f9"}}/>
                      <span>Photo</span>
                </div>
                <div className="options">
                      <YouTubeIcon style={{color:"#7fc15e"}}/>
                      <span>Video</span>
                </div>
                <div className="options">
                      <TodayIcon style={{color:"#e7a33e"}}/>
                      <span>Event</span>
                </div>
                <div className="options">
                      <AssignmentIcon style={{color:"#fc9295"}}/>
                      <span>Write Article</span>
                </div>
             </div>
             </div>
             <Post name="Faizan Pasha" description="We are learning React js" message="This is my first class" photoURL=""/>
            
       </div>
    )
}

export default Feed;