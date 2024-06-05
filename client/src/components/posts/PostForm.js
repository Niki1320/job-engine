// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addPost } from "../../actions/post";
// import {Avatar} from "@mui/material"
// import PhotoIcon from '@mui/icons-material/Photo';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TodayIcon from '@mui/icons-material/Today';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// const PostForm = ({ addPost }) => {
//   const [text, setText] = useState("");
//   return (

//     <div className="feed">
//              <div className="feed_input">
//              <div className="feed_form">
//                 <Avatar />
//                 <form onSubmit={e => { 
//                   e.preventDefault(); 
//                   addPost({ text }); 
//                   setText("");
//                   }}>
//                     <input type="text" placeholder="Start Posting" onChange={e => setText(e.target.value)}/>
//                     <input type="submit" value="Submit"/>
//                 </form>
//             </div>
             
//              <div className="feed_options">
//                 <div className="options">
//                       <PhotoIcon style={{color:"#70b5f9"}}/>
//                       <span>Photo</span>
//                 </div>
//                 <div className="options">
//                       <YouTubeIcon style={{color:"#7fc15e"}}/>
//                       <span>Video</span>
//                 </div>
//                 <div className="options">
//                       <TodayIcon style={{color:"#e7a33e"}}/>
//                       <span>Event</span>
//                 </div>
//                 <div className="options">
//                       <AssignmentIcon style={{color:"#fc9295"}}/>
//                       <span>Write Article</span>
//                 </div>
//              </div>
//              </div>
             
            
//        </div>
//   );
// };

// PostForm.propTypes = {
//   addPost: PropTypes.func.isRequired
// };

// export default connect(
//   null,
//   { addPost }
// )(PostForm);

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost, getPosts } from "../../actions/post";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PostItem from "./PostItem";
import Spinner from "../layout/Spinner";  // Import your Spinner component
import './feed.css'

const Feed = ({ addPost, getPosts, post: { posts, loading } }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleAddPost = () => {
    addPost({ text });
    setText("");
  };

  return (
    <div className="feed">
      <div className="feed_input">
        <div className="feed_form">
          <Avatar />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddPost();
            }}
          >
            <input
              type="text"
              placeholder="Start Posting"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="feed_options">
          <div className="options">
            <PhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="options">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>
          <div className="options">
            <TodayIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>
          </div>
          <div className="options">
            <AssignmentIcon style={{ color: "#fc9295" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>

      <div className="posts">
        {loading ? (
          <Spinner />
        ) : (
          posts.map((post) => <PostItem key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
};

Feed.propTypes = {
  addPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { addPost, getPosts })(Feed);
