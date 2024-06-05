import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import './Education.css';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    gpa: '',
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, gpa, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
      <div className="maincont">
            <h3>Education</h3>
            <form onSubmit={e => {e.preventDefault(); addEducation(formData, history);}}>

      
            <div className="options">
                <label>Add School:</label>
                <input type="text" name='school' value={school} onChange={e => onChange(e)} required />
            </div>
            <div className="options">
            <label for="degree">Select Degree:</label>
                <select id="degree" name='degree' value={degree} onChange={e => onChange(e)} required>
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
                <input type="text" name='fieldofstudy' value={fieldofstudy} onChange={e => onChange(e)}/>
            </div>

            <div className="options">
                <label>Start date:</label>
                <input type="date" name='from' value={from} onChange={e => onChange(e)}/>
            </div>
            <div className="options">
                <label>Graduation Date:</label>
                <input type='date' name='to' value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''}
          />
            </div>
            <div className="options">
                <label>GPA:</label>
                <input type="text" name="gpa" value={gpa} onChange={e => onChange(e)}/>
            </div>
            <div className="options">
                <label>Achievements:</label>
                <br/>
                <textarea rows="6" cols="63" name="description" required value={description} onChange={e => onChange(e)}></textarea>
            </div>
            <button type="submit">Submit</button>
        <Link className='btn btn-primary my-1' to='/dashboard'>
          Go Back
        </Link>
            
            
            <br/>
            </form>
        </div>
      
        
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEducation }
)(withRouter(AddEducation));