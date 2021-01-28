import React from 'react';
import logo from '../../../logo.svg';
import s from './style.module.sass';
const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={logo} className={s.logo__img} alt="" />
      <h1>AppVesto</h1>
    </div>
  );
};

export default Logo;
