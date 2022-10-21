import React, { Fragment, useState } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e  => setFormData({ ...formData, [e.target.name]: e.target.value});

    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, navigate)
    }

  return (
    <Fragment>
    <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user-plus"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field </small>
      <form className="form" onSubmit={(e => onSubmit(e))}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Data Entry">Data Entry</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Manager">Manager</option>
            <option value="Student">Student</option>
            <option value="Level 1 Operator">Level 1 Operator</option>
            <option value="Level 2 Operator">Level 2 Operator</option>
            <option value="Level 3 Operator">Level 3 Operator</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">Current Position ( example: Software Developer or Department Manager) </small>
        </div>
        <div className="form-group">
          <select name="company" value={company} onChange={e => onChange(e)}>
            <option value="0">* Select Department Status</option>
            <option value="HR">HR</option>
            <option value="Development">Development</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Management">Management</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Production">Production</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Current Department ( example: HR or Application Development) </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location"  value={location} onChange={e => onChange(e)} />
          <small className="form-text">City & state suggested (eg. Boston, MA)</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills"  value={skills} onChange={e => onChange(e)}/>
          <small className="form-text">Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)
            </small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"   value={bio} onChange={e => onChange(e)}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </Fragment>
  )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(CreateProfile)