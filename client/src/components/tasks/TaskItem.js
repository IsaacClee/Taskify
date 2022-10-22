import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/tasks';



const TaskItem = ({ 
  deleteTask, 
  auth,
  task: {_id, title, user, status, owner, department, duedate, createdate}}) => {
  return <Fragment>
      <div className="grid-container">
        <div className="grid-item">{title}</div>
        <div className="grid-item">{duedate}</div>
        <div className="grid-item">{status}</div>  
        <div className="grid-item"><Moment format='MM/DD/YYYY'>{createdate}</Moment></div>  
        <div className="grid-item"><Link to={`/tasks/${_id}`}><i className="fa fa-file"></i></Link></div>
        <button className="grid-item" onClick={() => deleteTask(_id)} type='button'><i className='fas fa-times bg-danger' /></button>
     </div> 
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