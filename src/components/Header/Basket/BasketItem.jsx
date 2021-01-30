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
        <div>{name}</div>
        <div>{price}</div>
      </Grid>
    </Grid>
  );
};

export default BasketItem;
