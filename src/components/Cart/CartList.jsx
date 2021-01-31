import React from 'react';
import { Grid } from '@material-ui/core';
import CartItem from './CartItem';
import s from './style.module.sass';
import TotalPrice from '../TotalPrice';

const CartList = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <Grid container className={s.cart__list}>
        <h2>Cart</h2>
        {data.map((item) => {
          return (
            <CartItem
              name={item.name}
              category={item.category}
              price={item.price}
              imgUrl={item.img_url}
              key={item.id}
              item={item}
            />
          );
        })}
      </Grid>
      <TotalPrice data={data} />
    </div>
  );
};

export default CartList;
