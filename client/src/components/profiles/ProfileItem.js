import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ 
profile:{ 
    user: { _id,name, avatar}, 
    status,
    company,
    location,
    bio,
    skills
}
}) => {

  return <div className="profile bg-dark">
    <img src={avatar} alt="" className="round-img" />
        <div>
            <h2>{name}</h2>
            <p>{status} with {company && <span>{company}</span>}</p>
            <p className="my-1">{location && <span>{location}</span>}</p>
            <p>About me: {bio && <span>{bio}</span>}</p>
        </div>
        <ul>
            <li>Skills:</li>
            {skills.slice(0,4).map((skill, index) =>(
                <li key={index} className="text-primary">
                    <i className="fas fa-check"></i> {skill}
                </li>
            ))}
        </ul>
  </div>
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem