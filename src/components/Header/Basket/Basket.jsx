import React, { useState } from 'react';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import BasketBlock from './BasketBlock';
import s from './style.module.sass';

const Basket = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBasket = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <div>
      <button onClick={toggleBasket} className={s.basket}>
        <ShoppingBasketOutlinedIcon fontSize="large" />
      </button>
      <BasketBlock setToggle={setToggle} toggle={toggle} />
    </div>
  );
};

export default Basket;
