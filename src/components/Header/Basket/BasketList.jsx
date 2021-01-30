import { Button, Grid, Paper } from '@material-ui/core';
import React from 'react';
import BasketItem from './BasketItem';
import s from './style.module.sass';

const BasketList = (props) => {
  const { data } = props;
  return (
    <Grid className={s.basket__wrapper} container justify="center" spacing={2}>
      {data.map((item) => {
        return (
          <Grid key={item.id} item xs={12}>
            <Paper>
              <BasketItem
                name={item.name}
                price={item.price}
                imgUrl={item.img_url}
              />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BasketList;
