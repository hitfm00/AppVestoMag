import { Grid } from '@material-ui/core';
import React from 'react';
import BasketItem from './BasketItem';

const BasketList = () => {
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={4}>
        <BasketItem />
      </Grid>
    </Grid>
  );
};

export default BasketList;
