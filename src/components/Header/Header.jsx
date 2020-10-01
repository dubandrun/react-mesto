import React from 'react';

import classNames from 'classnames'

import classes from './Header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className={classNames(classes.header, classes.rootSection)}>
      <img src={logo} alt="logo" className="logo"/>
    </header>
  )
}

export default Header;

