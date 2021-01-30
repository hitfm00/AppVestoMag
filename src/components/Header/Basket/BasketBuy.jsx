import {
  Button,
  makeStyles,
  withStyles,
  ThemeProvider,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import s from './style.module.sass';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { green, purple } from '@material-ui/core/colors';
import Decimal from 'decimal.js';

const useStyles = makeStyles((theme) => ({
  margin: {
    width: '98%',
  },
}));
const BasketBuy = (props) => {
  const { data } = props;
  const [summaryPrice, setSummaryPrice] = useState();
  const classes = useStyles();

  useEffect(() => {
    const getSummaryPrice = () => {
      let price = new Decimal(0);
      data.forEach((item) => {
        price = price.plus(new Decimal(item.price));
      });
      setSummaryPrice(price.toString());
    };
    getSummaryPrice();
  }, [data]);

  return (
    <div className={s.basket__buyButtonBlock}>
      <div className={s.basket__summary}>
        <span>Сумма заказа:</span>
        <span>${summaryPrice}</span>
      </div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingBasketIcon />}
        className={classes.margin}
      >
        Buy
      </Button>
    </div>
  );
};

export default BasketBuy;
