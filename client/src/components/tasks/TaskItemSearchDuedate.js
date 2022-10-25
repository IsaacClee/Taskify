import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/tasks';



const TaskItem = ({ 
  deleteTask, 
  auth,
  search,
  task: {_id, title, user, status, owner, department, duedate, createdate}}) => {
  return !auth.loading && duedate.includes(search) || !auth.loading && search.toUpperCase() === '' ? <Fragment>
      <div className="grid-container">
        <div className="grid-item bg-light">{title}</div>
        <div className="grid-item">{duedate}</div>
        <div className="grid-item bg-light">{status}</div>  
        <div className="grid-item bg-light">{department}</div>  
        <div className="grid-item"><Moment format='MM/DD/YYYY'>{createdate}</Moment></div>  
        <div className="grid-item bg-light"><Link to={`/tasks/${_id}`}><i className="fa fa-file"></i></Link></div>
     </div> 
  </Fragment> :  <Fragment>
  </Fragment>
}

TaskItem.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});



export default connect(mapStateToProps, { deleteTask })(TaskItem);