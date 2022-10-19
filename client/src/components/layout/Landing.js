import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
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
}

export default Landing