import React from "react";
import "./CSS/Maincont.css";
function Maincont(){
    return (
        <div className="maincont">
            <h3>Education</h3>
            <div className="options">
                <label>Add School:</label>
                <input type="text" name="school" />
            </div>
            <div className="options">
            <label for="degree">Select Degree:</label>
                <select id="degree" name="degree">
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="doctorate">Doctorate</option>
                    <option value="associate">Associate Degree</option>
                    <option value="diploma">Diploma</option>
                    <option value="diploma">Others</option>

                </select>
            </div>
            <div className="options">
                <label>Field of study:</label>
                <input type="text" name="field_of_study"/>
            </div>

            <div className="options">
                <label>Start date:</label>
                <input type="date" name="start_date"/>
            </div>
            <div className="options">
                <label>Graduation Month:</label>
                <input type="month" name="end_date"/>
            </div>
            <div className="options">
                <label>GPA:</label>
                <input type="text" name="gpa"/>
            </div>
            <div className="options">
                <label>Achievements:</label>
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
