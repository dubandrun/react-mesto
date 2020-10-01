import React from 'react';

import classNames from 'classnames'
import classes from './Profile.module.css'

const Profile = (props) => {
  return (
    <div className={classNames(classes.profile, classes.rootSection)}>
      <div className={classes.userInfo}>
        <div className={classes.photo}></div>
        <div className={classes.data}>
          <h3 className={classes.name}>{props.name}</h3>
          <p className={classes.job}>{props.job}</p>
          <button className={classNames(classes.button, classes.editButton)}>Edit</button>
        </div>
        <button className={classNames(classes.button, classes.userInfoButton)}>+</button>
      </div>
    </div>
  )
}

export default Profile