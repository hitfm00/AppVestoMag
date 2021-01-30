import { Grid } from '@material-ui/core';
import React from 'react';
import s from './style.module.sass';

const BasketItem = (props) => {
  const { name, price, imgUrl } = props;
  console.log(name);
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <img src={imgUrl} alt="" className={s.basket__img} />
        <div className={s.basket__infoBlock}>
          <div className={s.basket__info}>
            <span>Title:</span>
            <span>{name}</span>
          </div>
          <div className={s.basket__info}>
            <span>Price:</span>
            <span>${price}</span>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default BasketItem;
