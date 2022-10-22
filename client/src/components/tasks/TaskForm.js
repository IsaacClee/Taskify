import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { addTask } from '../../actions/tasks';

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    owner: '',
    status: '',
    department: '',
    duedate: 'No Due Date'

  });

  const {
    title,
    owner,
    status,
    department,
    duedate
  } = formData;

  const onChange = e  => setFormData({ ...formData, [e.target.name]: e.target.value});

  const navigate = useNavigate();

  const onSubmit = e => {
      e.preventDefault();
      addTask(formData, navigate)
  }


  return (
    <div>
 <h1 className="large text-primary">
        Create a New Task
      </h1>
      <p className="lead">
        <i className="fas fa-user-plus"></i> Fill out the form below:
      </p>
      <small>* = required field </small>
      <form className="form" onSubmit={(e => onSubmit(e))}>
         <div className="form-group">
          <input type="text" placeholder="*Title" name="title"  value={title} onChange={e => onChange(e)} />
          <small className="form-text">Task descriptive title</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Owner" name="owner"  value={owner} onChange={e => onChange(e)} />
          <small className="form-text">Do you have an exact person in mind to complete the task?</small>
        </div>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Project Status</option>
            <option value="NEW">New</option>
            <option value="PLANNED">Planned</option>
            <option value="IN PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
          <small className="form-text">Is this a new or exisiting assignment</small>
        </div>
        <div className="form-group">
          <select name="department" value={department} onChange={e => onChange(e)}>
            <option value="0">Select Department Status</option>
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
            Assign a Department ( example: HR or Application Development) with or instead of a direct owner</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Due Date" name="duedate"  value={duedate} onChange={e => onChange(e)} />
          <small className="form-text">Add a Due Date if required.</small>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </div>
  )
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default connect(null, { addTask })(TaskForm)