import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/'>
        <i className="fa fa-tasks" />  Taskify
        </Link>
      </h1>
      <ul>
        <li><Link to="/profiles"><i className="fa fa-plug"></i> Team Members</Link></li>
        <li><Link to="/register"><i className="fa fa-user-plus"></i> Create account</Link></li>
        <li><Link to="/login"><i className="fa fa-user-circle"></i> Login</Link></li>
        <li><a href="https://isaaclee.site"><i className="fa fa-paint-brush"></i> Creator</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

