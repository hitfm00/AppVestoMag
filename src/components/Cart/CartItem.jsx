import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import s from './style.module.sass';

const CartItem = (props) => {
  const { imgUrl, name, price, category, item } = props;

  return (
    <Grid className={s.cart__item} item xs={12}>
      <div className={s.cart__wrapper}>
        <img src={imgUrl} alt="" className={s.cart__img} />
        <div className={s.cart__infoBlock}>
          <div className={s.cart__info}>
            <span className={s.cart__nameInfo}>Title:</span>
            <span>{name}</span>
          </div>
          <div className={s.cart__info}>
            <span className={s.cart__nameInfo}>Category:</span>
            <span>{category}</span>
          </div>
          <div className={s.cart__info}>
            <span className={s.cart__nameInfo}>Price:</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default CartItem;
