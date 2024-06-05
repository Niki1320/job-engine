import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import {Avatar} from "@mui/material"
import MoreVertIcon from "@mui/icons-material/More";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import "./post.css";

import { addLike, removeLike, deletePost } from "../../actions/post";

// const PostItem = ({
//   addLike,
//   deletePost,
//   auth,
//   post: { _id, text, name, description, avatar, user, likes, comments},
//   showActions
// })

const PostItem = ({
  addLike,
  post: { _id, text, name, description, likes,},
}) => (

  <div className="post">
           <div className="post_header">
                
                    
                    <div className="post_profile_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        
                    </div>
                
                    <MoreVertIcon/>
           </div>
           <div className="post_body">
                <p>{text}</p>
           </div>

           <div className="post_footer">
               <div className="post_footer_opt">
               
             <ThumbUpIcon onClick={e => addLike(_id)}/>{" "}
             {likes.length > 0 && <span>{likes.length}</span>}
           
               </div>
               <div className="post_footer_opt">
                    <CommentIcon/>
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
);

PostItem.defaultProps = {
  showActions: true 
}
 
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
