import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem';
import { makeStyles, Paper } from '@material-ui/core';
import { API } from '../../api';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let url = 'http://167.172.186.154/api/products';
      let response = await fetch(url);
      let data = await response.json();
      setData(data);
      console.log(data);
    };
    getProducts();
  }, []);
  // console.log(data);

  return (
    <Grid container justify="center" spacing={2}>
      {data.map((item) => {
        return (
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <ProductItem
                name={item.name}
                price={item.price}
                img={item.img_url}
              />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductsList;
