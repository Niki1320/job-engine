import React, {useState } from "react";
import { Link, withRouter} from 'react-router-dom'; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from '../../actions/profile'; 
import "./CreateProfile.css";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = e => {
    e.preventDefault(); 
    createProfile(formData, history); 
  }
  return (
    <div className="content">
      <h3>Profile Details</h3>
      <form onSubmit={e => onSubmit(e)}>
        <div id="upper">
          <div id="options">
                <label>Profession</label>
                <input type="text" name="status" placeholder="Profession" value={status} onChange={e => onChange(e)}/>
          </div>
        </div>
        <div id="options">
        <label>Company</label>
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
          />
        </div>
        <div id="options">
        <label>Website</label>
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={e => onChange(e)}
          />
        </div>
        <div id="options">
        <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <div id="options">
        <label>Skills</label>
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={e => onChange(e)}
          />
        </div>
        <div id="options">
        <label>About</label>
          <input
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="my-2">
          <button id="btn2"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            
          >
            Add Social Network Links
          </button>
        </div>
        {displaySocialInputs && (
          <div className="social">
            <div id="options">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div id="options">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div id="options">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div id="options">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div id="options">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
        )}

        <input type="submit" className="btn btn-primary my-1" id="btn2"/>
        <Link className='btn btn-primary my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};


export default connect(null, { createProfile })(withRouter(CreateProfile));
