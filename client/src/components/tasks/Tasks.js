import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import { getTasks } from '../../actions/tasks';

const Tasks = ({ getTasks, task: { tasks, loading } }) => {
    useEffect(() => {
        getTasks();
    }, [getTasks]);


  return (
    <div>Tasks</div>
  )
}

Tasks.propTypes = {
    getTasks: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    task: state.task
});

export default connect(mapStateToProps, { getTasks })(Tasks);