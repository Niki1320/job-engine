import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./index.css";

function App(){
  return (
    <div className="main">
         <div className="logo">
             <span>Linked</span>
             <LinkedInIcon fontSize="large"/>
         </div>
         <div className="signup_form">
               <form>
                    <div className="element">
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name"/>
                    </div>
                    
                    <div className="element">
                    <label>Email</label>
                    <input type="text" placeholder="Enter Email"/>
                    </div>
                    
                    <div className="element">
                    <label>Create Password</label>
                    <input type="text" placeholder="Create Password"/>
                    </div>
                    
                    <div className="element">
                    <label>Confirm Password</label>
                    <input type="text" placeholder="Confirm Password"/>
                    </div>
                    
                    <button type="submit">Sign Up</button>
               </form>
         </div>
    </div>
  )
}

export default App;