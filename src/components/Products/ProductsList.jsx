import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const ProductsList = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <ProductItem />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <ProductItem />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <ProductItem />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductsList;
