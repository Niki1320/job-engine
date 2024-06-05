import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import "./experience.css";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    from: '',
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, from, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    // <Fragment>
    //   <h1 className='large text-primary'>Add An Experience</h1>
    //   <p className='lead'>
    //     <i className='fas fa-code-branch' /> Add any developer/programming positions
    //     that you have had in the past
    //   </p>
    //   <small>* = required field</small>
    //   <form
    //     className='form'
    //     onSubmit={e => {
    //       e.preventDefault();
    //       addExperience(formData, history);
    //     }}
    //   >
    //     <div className='form-group'>
    //       <input
    //         type='text'
    //         placeholder='* Job Title'
    //         name='title'
    //         value={title}
    //         onChange={e => onChange(e)}
    //         required
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <input
    //         type='text'
    //         placeholder='* Company'
    //         name='company'
    //         value={company}
    //         onChange={e => onChange(e)}
    //         required
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <input
    //         type='text'
    //         placeholder='Location'
    //         name='location'
    //         value={location}
    //         onChange={e => onChange(e)}
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <h4>From Date</h4>
    //       <input
    //         type='date'
    //         name='from'
    //         value={from}
    //         onChange={e => onChange(e)}
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <p>
    //         <input
    //           type='checkbox'
    //           name='current'
    //           checked={current}
    //           value={current}
    //           onChange={() => {
    //             setFormData({ ...formData, current: !current });
    //             toggleDisabled(!toDateDisabled);
    //           }}
    //         />{' '}
    //         Current Job
    //       </p>
    //     </div>
    //     <div className='form-group'>
    //       <h4>To Date</h4>
    //       <input
    //         type='date'
    //         name='to'
    //         value={to}
    //         onChange={e => onChange(e)}
    //         disabled={toDateDisabled ? 'disabled' : ''}
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <textarea
    //         name='description'
    //         cols='30'
    //         rows='5'
    //         placeholder='Job Description'
    //         value={description}
    //         onChange={e => onChange(e)}
    //       />
    //     </div>
    //     <input type='submit' className='btn btn-primary my-1' />
    //     <Link className='btn btn-light my-1' to='/dashboard'>
    //       Go Back
    //     </Link>
    //   </form>
    // </Fragment>
    <div className="maincont">
            <h3>Experience</h3>
            <form  onSubmit={e => { e.preventDefault(); addExperience(formData, history);}}>
            <div className="options1">
                <label>Job Title</label>
                <input type="text" name='title' value={title} onChange={e => onChange(e)} required />
            </div>
            <div className="options1">
                <label>Company</label>
                <input type="text" name='company' value={company} onChange={e => onChange(e)} required/>
            </div>
            <div className="options1">
                <label>Start date</label>
                <input type='date' name='from' value={from} onChange={e => onChange(e)}/>
            </div>
            <div className="options1">
                <label>Job Description</label>
                <br/>
                <textarea name='description' cols='75' rows='5' placeholder='Job Description' value={description}
                onChange={e => onChange(e)}></textarea>
            </div>
            <button type="submit" class="btn1">Submit</button>
            <br/>
            <Link className='btn1' to='/dashboard'>
           Go Back
         </Link>
            </form>
        </div>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(withRouter(AddExperience));