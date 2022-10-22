import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import TaskItem from './TaskItem';
import TaskItemUser from './TaskItemUser';
import TaskItemDepartment from './TaskItemDepartment';
import { getTasks } from '../../actions/tasks';
import TaskForm from './TaskForm';
import { useParams } from "react-router-dom";

const Tasks = ({ getTasks, task: { tasks, loading } }) => {
    const { id } = useParams();

    useEffect(() => {
        getTasks(id);
    }, [getTasks, id]);


  return loading ? <Spinner /> : <Fragment>
    {/* All Tasks */}
        <h1 className="large text-primary">
            All Tasks:
        </h1>
        <p className="lead"><i className="fas fa-tasks"></i> Let's knock it out!</p>
        <input className='task-table-search' type="text" placeholder="Search by Title"></input>
        <input className='task-table-search' type="text" placeholder="Search by Status"></input>
        
        <div className="grid-container">
        <div className="grid-item bg-light">Title</div>
        <div className="grid-item bg-light">Due Date</div>
        <div className="grid-item bg-light">Status</div>  
        <div className="grid-item bg-light">Created on</div>  
        <div className="grid-item bg-light">Edit</div>
        <div className="grid-item bg-light">Delete</div>

        </div>
        <div className='posts'>
            {tasks.map(task => (
                <TaskItem key={task._id} task={task} />
                ))}
        </div>

        {/* Department Tasks */}

        <div className="spacer"></div>

        <h1 className="large text-primary">
            Department Tasks:
        </h1>
        <p className="lead"><i className="fas fa-tasks"></i> Team Effort! Many hands equals light work.</p>
        <div className="grid-container-type">
            <div className="grid-item-type bg-light">Title</div>
            <div className="grid-item-type bg-light">Due Date</div>
            <div className="grid-item-type bg-light">Status</div>  
            <div className="grid-item-type bg-light">Department</div>
            <div className="grid-item-type bg-light">Created on</div>  
            <div className="grid-item-type bg-light">Edit</div>
            <div className="grid-item-type bg-light">Delete</div>

        </div>
        <div className='posts'>
            {tasks.map(task => (
                <TaskItemUser key={task._id} task={task} />
                ))}
        </div>

        {/* Owner Tasks */}

        <div className="spacer"></div>

        <h1 className="large text-primary">
            Owner Tasks:
        </h1>
        <p className="lead"><i className="fas fa-tasks"></i> People power. Strength comes from within.</p>
        <div className="grid-container-type">
            <div className="grid-item-type bg-light">Title</div>
            <div className="grid-item-type bg-light">Due Date</div>
            <div className="grid-item-type bg-light">Status</div>  
            <div className="grid-item-type bg-light">Owner</div>
            <div className="grid-item-type bg-light">Created on</div>  
            <div className="grid-item-type bg-light">Edit</div>
            <div className="grid-item-type bg-light">Delete</div>

        </div>
        <div className='posts'>
            {tasks.map(task => (
                <TaskItemDepartment key={task._id} task={task} />
                ))}
        </div>



  </Fragment>
}

Tasks.propTypes = {
    getTasks: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    task: state.task
});

export default connect(mapStateToProps, { getTasks })(Tasks);