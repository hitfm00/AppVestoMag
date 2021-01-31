import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import CartList from '../../components/Cart/CartList';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import s from './style.module.sass';
import { API } from '../../api';

const CartPage = (props) => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { data } = props;

  // API request for purchase
  const purchase = async () => {
    try {
      alert(JSON.stringify({ products: data }, null, 2));
      alert('К сожалению не получилось сделать POST запрос из-за CORS');

      let url = 'http://167.172.186.154/api/purchase/';
      let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          products: data,
        }),
      });
      let datas = await response.json();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={s.cartPage}>
      {data.length === 0 ? (
        <NavLink to="/" className={s.cartPage__getButton}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingBasketIcon />}
          >
            Get products
          </Button>
        </NavLink>
      ) : (
        <CartList data={data} />
      )}

      <Button
        disabled={data.length === 0}
        variant="contained"
        color="primary"
        onClick={purchase}
      >
        Buy {data.length === 0 ? '(You need add products to cart)' : null}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.products,
});
export default compose(connect(mapStateToProps, null))(CartPage);
