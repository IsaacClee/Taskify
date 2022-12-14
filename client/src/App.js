import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import Profiles from './components/profiles/Profiles';
import Tasks from './components/tasks/Tasks';
import Task from './components/task/Task';
import { LOGOUT } from './actions/types';


// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
  <Provider store={store}>

  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Landing /> } />
      </Routes>
      <section className='container'>
        <Alert />
      <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/profiles' element={<Profiles />}/>
          <Route exact path='/create-profile' element={<CreateProfile />} />
          <Route exact path='/tasks' element={<Tasks />} />
          <Route exact path='/tasks/:id' element={<Task />} />
        </Routes>    
      </section>
    </Fragment>
  </Router>

  </Provider>
)};

export default App;
