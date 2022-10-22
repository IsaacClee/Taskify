import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


const TaskItemDepartment = ({ task: {_id, title, user, status, owner, department, duedate, createdate}}) => {
  return !owner ? <Fragment></Fragment> : <Fragment>
      <div className="grid-container-type">
        <div className="grid-item-type">{title}</div>
        <div className="grid-item-type">{duedate}</div>
        <div className="grid-item-type">{status}</div>  
        <div className="grid-item-type">{owner}</div>
        <div className="grid-item-type"><Moment format='MM/DD/YYYY'>{createdate}</Moment></div>  
        <div className="grid-item-type"><Link to={`/tasks/${_id}`}><i className="fa fa-file"></i></Link></div>
        <div className="grid-item-type"><i className='fas fa-times bg-danger' /></div>
     </div>
  </Fragment>
}

TaskItemDepartment.propTypes = {}

export default connect(null, {})(TaskItemDepartment);