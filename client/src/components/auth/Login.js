import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ( { login, isAuthenticated }) => {
  const [formData, setFormData ] = useState({
    email: '',
    password: '',
    password2: ''
  });  

  const { email, password} = formData;

  const onChange = e  => setFormData({ ...formData, [e.target.name]: e.target.value});
  
  const onSubmit = async  e => {
    e.preventDefault();
    login(email, password);
  }

  if(isAuthenticated){
    return <Navigate to='/dashboard'  replace={true}/>    
  }


  return (

    <Fragment>
        <h1 className="large text-primary">Login</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign back in here.</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} 
            onChange={e => onChange(e)} 
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Need a account? Start here. <Link to="/register">Sign In</Link>
      </p>
    </Fragment>
        )
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthentificated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated 
});


export default connect(mapStateToProps, { login })(Login);