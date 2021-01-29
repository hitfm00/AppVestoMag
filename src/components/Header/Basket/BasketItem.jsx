import { Grid } from '@material-ui/core';
import React from 'react';

const BasketItem = (props) => {
  const { name, price } = props;
  console.log(name);
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <div>{name}</div>
        <div>{price}</div>
      </Grid>
    </Grid>
  );
};

export default BasketItem;
