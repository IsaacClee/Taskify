import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


const TaskItemDepartment = ({ task: {_id, title, user, status, department, duedate, createdate}}) => {
  return !department || department === '' ? <Fragment></Fragment> : <Fragment>
      <div className="grid-container">
        <div className="grid-item">{title}</div>
        <div className="grid-item">{duedate}</div>
        <div className="grid-item">{status}</div>  
        <div className="grid-item">{department}</div>
        <div className="grid-item"><Moment format='MM/DD/YYYY'>{createdate}</Moment></div>  
        <div className="grid-item"><Link to={`/tasks/${_id}`}><i className="fa fa-file"></i></Link></div>

     </div>
  </Fragment>
}

TaskItemDepartment.propTypes = {}

export default connect(null, {})(TaskItemDepartment);