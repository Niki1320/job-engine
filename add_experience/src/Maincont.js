import React from "react";
import "./CSS/Maincont.css";
function Maincont(){
    return (
        <div className="maincont">
            <h3>Experience</h3>
            <div className="options">
                <label>Job Title</label>
                <input type="text" name="job_title" />
            </div>
            <div className="options">
                <label>Company</label>
                <input type="text" name="company"/>
            </div>
            <div className="options">
                <label>Start date</label>
                <input type="date" name="start_date"/>
            </div>
            <div className="options">
                <label>Job Description</label>
                <br/>
                <textarea rows="6" cols="63" required></textarea>
            </div>
            <button type="submit">Submit</button>
            <br/>
            <button>Go Back</button>
        </div>
    )
}

export default Maincont;
