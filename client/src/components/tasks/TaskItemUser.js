import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


const TaskItemUser = ({ task: {_id, title, user, status, owner, duedate, createdate}}) => {
  return !owner ? <Fragment></Fragment> : <Fragment>
      <div className="grid-container">
        <div className="grid-item bg-light">{title}</div>
        <div className="grid-item">{duedate}</div>
        <div className="grid-item bg-light">{status}</div>  
        <div className="grid-item">{owner}</div>
        <div className="grid-item bg-light"><Moment format='MM/DD/YYYY'>{createdate}</Moment></div>  
        <div className="grid-item"><Link to={`/tasks/${_id}`}><i className="fa fa-file"></i></Link></div>
     </div>
  </Fragment>
}

TaskItemUser.propTypes = {}

export default connect(null, {})(TaskItemUser);