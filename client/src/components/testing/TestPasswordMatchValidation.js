import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';


function TestPasswordMatchValidation({ setAlert, register}) {
    const [formData, setFormData ] = useState({
        name: 'test',
        email: 'test@test.com',
        password: 'password',
        password2: 'password2'
      });  

      const { name, email, password, password2} = formData;

      const onSubmit = async  e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Password does not match.', 'danger');
            console.log("Test successful. The password validation is working")
        } else {
            console.log("Test failed. The Password validation is not working correctly")
        }
      }
    

  return (
    <div>
        <form className="testform" onSubmit={e => onSubmit(e)}>
          <input type="submit" className="btn btn-primary" value="Test Password" />
        </form>
    </div>
  )
}

TestPasswordMatchValidation.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    auth: state.auth
  });
  

export default connect(mapStateToProps, { setAlert, register })(TestPasswordMatchValidation)
