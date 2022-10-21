import React from 'react'; 
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }

  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Taskify</h1>
        <p className="lead">
        Manage your project and team with Taskify. Relax into your work week and never miss a deadline again.
        </p>
        <div className="buttons">
          <Link to="register/" className="btn btn-primary">Create acccount</Link>
          <Link to="login/" className="btn btn-light">Login</Link>
        </div>
      </div>
    </div>
  </section>
  )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);