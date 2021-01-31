import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from './ProductItem';
import { Button, makeStyles, Paper } from '@material-ui/core';
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
  const [oldData, setOldData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      let url = 'http://167.172.186.154/api/products';
      let response = await fetch(url);
      let datas = await response.json();
      setData(datas);
      setOldData(datas);
      setIsFetching(false);
    };
    getProducts();
  }, []);

  const filterByCategory = (category) => {
    let filteredArr = oldData.filter((item) => {
      return item.category === category;
    });
    setData(filteredArr);
  };

  return (
    <div>
      <div>
        <h4>Filter by category</h4>
        <Grid container>
          {oldData.map((item) => {
            return (
              <Grid key={item.id} item xs={6}>
                <Button
                  onClick={() => {
                    filterByCategory(item.category);
                  }}
                >
                  {item.category}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Grid container justify="center" spacing={2}>
        {isFetching ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <>
            {data.map((item) => {
              return (
                <Grid key={item.id} item xs={6}>
                  <Paper className={classes.paper}>
                    <ProductItem
                      name={item.name}
                      price={item.price}
                      img={item.img_url}
                      category={item.category}
                      item={item}
                      id={item.id}
                    />
                  </Paper>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </div>
  );
};

export default ProductsList;
