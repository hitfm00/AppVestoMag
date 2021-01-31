import React from 'react';
import { Close } from '@material-ui/icons';
import BasketBuy from './BasketBuy';
import s from './style.module.sass';
import BasketList from './BasketList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const BasketBlock = (props) => {
  const { toggle, setToggle, data } = props;
  console.log(data);
  return (
    <div
      className={`${s.basket__block} ${toggle ? s.basket__blockActive : ''}`}
    >
      <div className={s.basket__header}>
        <h3>Cart</h3>
        <button
          onClick={() => {
            setToggle(false);
          }}
        >
          <Close />
        </button>
      </div>
      {data.length === 0 ? (
        <span className={s.basket__emptyText}>Cart is empty</span>
      ) : (
        <BasketList data={data} />
      )}

      {data.length === 0 ? (
        <NavLink to="/">
          <Button
            onClick={() => setToggle(false)}
            variant="contained"
            color="primary"
            startIcon={<ShoppingBasketIcon />}
          >
            Get products
          </Button>
        </NavLink>
      ) : (
        <BasketBuy setToggle={setToggle} data={data} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.products,
});

export default compose(connect(mapStateToProps, null))(BasketBlock);
