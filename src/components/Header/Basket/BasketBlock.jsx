import React from 'react';
import { Close } from '@material-ui/icons';

import s from './style.module.sass';
import BasketList from './BasketList';
import { connect } from 'react-redux';
import { compose } from 'redux';

const BasketBlock = (props) => {
  const { toggle, setToggle, data } = props;
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
      <BasketList data={data} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.products,
});

export default compose(connect(mapStateToProps, null))(BasketBlock);
