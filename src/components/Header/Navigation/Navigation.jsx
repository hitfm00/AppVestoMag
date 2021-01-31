import React, { createRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink className={s.navigation__link} to="/">
        Home
      </NavLink>
      <NavLink className={s.navigation__link} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Navigation;
