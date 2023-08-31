import React from "react";
import "./CSS/MainContent.css";
import AddIcon from '@mui/icons-material/Add';

function MainContent(){
    return(
    <div className="content">
        <h3>Profile Details</h3>
        <div className="Upper">
            <div className="options">
                <label>Profession</label>
                <input type="text" name="profession" />
            </div> 
            <div className="options">
                <label>Company</label>
                <input type="text" name="company" />
            </div>
            <div className="options">
                <label>Location</label>
                <input type="text" name="location"/>
            </div>
            <div className="options">
                <label>Skills</label>
                <input type="text" name="skills"/>
            </div>
            <div className="options"> 
                <label>About</label>
                <input type="text" name="about"/>
            </div>
        </div>

        <div className="Lower">
           <div className="social">Your Social Media Links:</div>
           <div className="options">
                <label>Github</label>
                <input type="text" name="github"/>
            </div>
            <div className="options" >
                <label>Twitter</label>
                <input type="text" name="twitter"/>
            </div>
            <div className="options">
                <label>Facebook</label>
                <input type="text" name="facebook"/>
            </div>

        </div>
        <div className="experience">
            <AddIcon  className="icon"></AddIcon>
            <a href="">Add Experience</a>
        </div>
        <div className="education">
            <AddIcon className="icon"></AddIcon>
            <a href="">Add Education</a>
        </div>
        
        <button>Submit</button>
        <br/>
        <button>Go Back</button>
            
    </div>
    )
}

export default MainContent;

