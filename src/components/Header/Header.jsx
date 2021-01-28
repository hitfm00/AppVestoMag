import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import Basket from './Basket/Basket';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import s from './style.module.sass';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__topBlock}>
          <Logo />
          <div className={s.header__icons}>
            <NavLink to="/login">
              <PersonOutlineOutlinedIcon fontSize="large" />
            </NavLink>
            <Basket />
          </div>
        </div>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
