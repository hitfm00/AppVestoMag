import { Grid } from '@material-ui/core';
import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
  const { data } = props;
  return (
    <Grid container justify="center" spacing={2}>
      {data.map((item) => {
        return (
          <Grid key={item.id} item xs={12}>
            <BasketItem name={item.name} price={item.price} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BasketList;
