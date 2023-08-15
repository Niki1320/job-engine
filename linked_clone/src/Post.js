import React from "react";
import {Avatar} from "@mui/material"
import MoreVertIcon from "@mui/icons-material/More";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import "./CSS/post.css";
function Post(props){
    return(
        <div className="post">
           <div className="post_header">
                <div className="post_header_left">
                    <Avatar src={props.photoURL}/>
                    <div className="post_profile_details">
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                    </div>

                </div>
                <MoreVertIcon/>
           </div>
           <div className="post_body">
                <p>{props.message}</p>
           </div>

           <div className="post_footer">
               <div className="post_footer_opt">
                    <ThumbUpIcon/>
                    <span>Like</span>
               </div>
               <div className="post_footer_opt">
                    <CommentIcon/>
                    <span>Comment</span>
               </div>
               <div className="post_footer_opt">
                    <ShareIcon/>
                    <span>Share</span>
               </div>
               <div className="post_footer_opt">
                    <SendIcon/>
                    <span>Send</span>
               </div>

           </div>
        </div>
    )
}

export default Post;