import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getTask } from '../../actions/tasks';
import { updateTask } from '../../actions/tasks'
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from 'react-moment';


const Task = ({ updateTask, getTask, task: { task, loading }, match }) => {
    const { id } = useParams();

    useEffect(() => {
        getTask(id);
    }, [getTask, id]);

    const [formData, setFormData] = useState({
      title: '',
      owner: '',
      status: '',
      department: '',
      duedate: ''
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
        updateTask(formData, id);
    }

    

  return  loading || !task ? (
    <Spinner />
    ) : (
    <Fragment>
     <div>
       <h1 className="large text-primary">
        Update a existing task
      </h1>
      <p className="lead">
        <i className="fas fa-user-plus"></i> Fill out the form below:
      </p>
      <small>* = required field </small>
      <form className="form" onSubmit={(e => onSubmit(e))}>
         <div className="form-group">
          <input type="text" placeholder={task.title} name="title"  value={title} onChange={e => onChange(e)} />
          <small className="form-text">*Title: Task descriptive title</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder={task.owner} name="owner"  value={owner} onChange={e => onChange(e)} />
          <small className="form-text">Owner: Do you have an exact person in mind to complete the task?</small>
        </div>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value={task.status}>{task.status} </option>
            <option value="NEW">New</option>
            <option value="PLANNED">Planned</option>
            <option value="IN PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
          <small className="form-text">*Status: Is this a new or exisiting assignment</small>
        </div>
        <div className="form-group">
          <select name="department" value={department} onChange={e => onChange(e)}>
            <option value={task.department}>{task.department}</option>
            <option value="">No department</option>
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
            Department: Assign a Department ( example: HR or Application Development) with or instead of a direct owner</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder={task.duedate} name="duedate"  value={duedate} onChange={e => onChange(e)} />
          <small className="form-text">Due Date: Add a Due Date if required. Format: MM/DD/YYYY </small>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link to="../../tasks" className="btn btn-light my-1">Go Back</Link>
      </form>
    </div>
    </Fragment>
    )
}

Task.propTypes = {
    getTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(mapStateToProps, { getTask, updateTask })(Task);