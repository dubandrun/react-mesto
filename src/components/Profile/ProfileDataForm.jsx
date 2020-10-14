import React from 'react';
import { reduxForm } from 'redux-form';

import classNames from 'classnames'
import classes from './ProfileDataForm.module.css'

import closeButton from '../../images/close.svg'

const ProfileDataForm = ({handleSubmit, error, ...props}) => {
  return (
    <div className={classes.popupEdit}>
      <div className={classes.content}>
        <img onClick={props.openForm} src={closeButton} alt="closeForm" className={classes.close}/>
        <h3 className={classes.title}>Редактировать профиль</h3>
        <form onSubmit={handleSubmit} className={classes.form}>
            <input type="text"className={classNames(classes.input, classes.inputUsername)} placeholder="Имя"/>
            <span  className={classNames(classes.usernamevalue, classes.error)}></span>
            <input type="text" className={classNames(classes.input, classes.inputUserinfo)} placeholder="О себе"/>
            <span className={classNames(classes.userinfovalue, classes.error)}></span>
            <button type="submit" className={classNames(classes.button, classes.editButton)}>Сохранить</button>
        </form>
      </div>
    </div>
  )
}

const ProfileDataReduxForm = reduxForm({form: 'profileData'})(ProfileDataForm)

export default ProfileDataReduxForm