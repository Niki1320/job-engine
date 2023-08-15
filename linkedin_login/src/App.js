import React from "react";
import "./index.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function App() {
  return (
  <div>
    <div className="logo">
             <span>Linked</span>
             <LinkedInIcon fontSize="large"/>
         </div>
    <h1>Welcome to Your Professional Community!</h1>
    <div className='login'>
        <div className="inner_log">Login</div>
        <div className='email'>
          <label>Email</label>
          <br/>
          <input type="email" placeholder="Email Id" autoComplete="off" />
        </div>
        <div className='password'>
          <label>Password</label>
          <br/>
          <input type="password" placeholder='Password' />
        </div>
          <button type="submit">Login</button>
        <div className="join_now">
          <p>New User?</p>
          <a href="" >Join Now</a>
        </div>
          
        
    </div>
  </div>
    

  );
}

export default App;
