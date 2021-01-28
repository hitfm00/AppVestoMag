import React from 'react';
import { Close } from '@material-ui/icons';

import s from './style.module.sass';

const BasketBlock = (props) => {
  const { toggle, setToggle } = props;
  return (
    <div
      className={`${s.basket__block} ${toggle ? s.basket__blockActive : ''}`}
    >
      <div className={s.basket__header}>
        <h3>Корзина</h3>
        <button
          onClick={() => {
            setToggle(false);
          }}
        >
          <Close />
        </button>
      </div>
    </div>
  );
};

export default BasketBlock;
