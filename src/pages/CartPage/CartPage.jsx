import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import CartList from '../../components/Cart/CartList';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import s from './style.module.sass';
import { API } from '../../api';

const CartPage = (props) => {
  const [products, setProducts] = useState([]);
  const { data } = props;

  useEffect(() => {
    setProducts(data);
  }, []);

  const purchase = async () => {
    try {
      console.log(
        'Ошибка: Method Illuminate Validation Validator::validateNumber does not exist.'
      );
      await API.purchase(products).then((response) => {
        console.log(response);
      });
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
