import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


const TaskItem = ({ task: {_id, title, user, status, owner, department, duedate, createdate}}) => {
  return <Fragment>
      <div className="grid-container">
        <div className="grid-item">{title}</div>
        <div className="grid-item">{duedate}</div>
        <div className="grid-item">{status}</div>  
        <div className="grid-item"><Moment format='MM/DD/YYYY'>{createdate}</Moment></div>  
        <div className="grid-item"><Link to={`/task/${_id}`}><i className="fa fa-file"></i></Link></div>
        <div className="grid-item"><i className='fas fa-times bg-danger' /></div>
     </div>
  </Fragment>
}

TaskItem.propTypes = {}

export default connect(null, {})(TaskItem);