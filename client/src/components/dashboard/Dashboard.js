import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
// redux
import { connect } from "react-redux";
// import {Avatar} from "@mui/material";
import "./Content.css"
// actions
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile, 
  deleteAccount, 
  auth: { user },
  profile: { profile, loading }
}) => { 
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment id="bg">
      <h1 className="large text-primary" id="header">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" id="header"></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
           <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          
          <div className='content'>
             <div className="Avat">
             {/* <Avatar sx={{ width: 80, height: 80 }}/> */}
             </div>
             <p id="inner-header">Create Your Profile!</p>
             <p>Do a lot more after creating a profile</p>
             <img src="https://cdn2.vectorstock.com/i/1000x1000/66/51/connect-people-design-vector-5886651.jpg" alt="pic"/>
             <br/>
             <Link to="/create-profile" className="btn btn-primary my-1" id="btn2">
            Create Profile
          </Link> 
        </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired, 
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
