import React, { Fragment, useState }from 'react'
import { Link, Redirect } from 'react-router-dom'; 
import "./login.css";
//import LinkedInIcon from '@mui/icons-material/LinkedIn';

//redux
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types'; 
import { login } from '../../actions/auth'; 

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const { email, password} = formData;
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = async e => {
      e.preventDefault(); 
      login(email, password);
    }

    // Redirect if logged in 
    if(isAuthenticated) {
      return <Redirect to="/posts"/>
    }
    return (
      <Fragment>
        <div class="main-body">
          <div className="logo">
             <span>LinkedIn</span>
             {/* <LinkedInIcon fontSize="large"/> */}
         </div>
          <h1>Welcome to Your Professional Community!</h1>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className='login'>
            <div className="inner_log">Login</div>
            <div className='form-group' id="email">
              <label>Email</label>
              <br/>
              <input type="email" placeholder="Email Id" autoComplete="off" name="email"
              value={email}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className='form-group' id="password">
            <label>Password</label>
            <br/>
            <input type="password" placeholder='Password' name='password'
              value={password}
              minLength="6"
              onChange={e => onChange(e)}
              required />
          </div>
          <input type="submit" className="btn btn-primary" id="btn-css" value="Login" />
          <div className="my-1" id="join_now">
            <p>New User?</p>
            <Link to="/register" id="new">Join Now</Link>
          </div>
    </div>
    </form>
  </div>
        
      </Fragment>
    );
  };

Login.propTypes = {
  login: PropTypes.func.isRequired, 
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login)
