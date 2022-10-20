import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles"><i className="fa fa-plug"></i> Team Members</Link>
      </li>
      <li>
        <Link to="/posts">Tasks</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
    <li><a href="https://isaaclee.site"><i className="fa fa-paint-brush"></i> Creator</a></li>
    <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
  </ul>
  );

  const guestLinks = (
    <ul>
    <li><Link to="/profiles"><i className="fa fa-plug"></i> Team Members</Link></li>
    <li><Link to="/register"><i className="fa fa-user-plus"></i> Create account</Link></li>
    <li><Link to="/login"><i className="fa fa-user-circle"></i> Login</Link></li>
    <li><a href="https://isaaclee.site"><i className="fa fa-paint-brush"></i> Creator</a></li>
  </ul>
  );


  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/'>
        <i className="fa fa-tasks" />  Taskify
        </Link>
      </h1>
      { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ 
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);

