import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getTask } from '../../actions/tasks';
import { useParams } from "react-router-dom";


const Task = ({ getTask, task: { task, loading }, match }) => {
    const { id } = useParams();

    useEffect(() => {
        getTask(id)
    }, [getTask, id]);

  return (
    <div>Task</div>
  )
}

Task.propTypes = {
    getTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(mapStateToProps, { getTask })(Task);