import React from 'react';
import {Avatar} from "@mui/material";
import "./CSS/Content.css"


function Content(){
    return(
        <div className='content'>
             <div className="Avat">
             <Avatar sx={{ width: 80, height: 80 }}/>
             </div>
             <h2>Welcome Nikita! </h2>
             <p>Create Your Profile!</p>
             <p>Do a lot more after creating a profile</p>
             <img src="https://cdn2.vectorstock.com/i/1000x1000/66/51/connect-people-design-vector-5886651.jpg" alt="pic"/>
             <br/>
             <button>Create Profile</button>
        </div>
    )
}
export default Content;