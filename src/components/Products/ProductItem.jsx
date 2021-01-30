import React from 'react';
import s from './style.module.sass';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {
  IconButton,
  makeStyles,
  Tooltip,
  withStyles,
  Zoom,
} from '@material-ui/core';
import { addProduct } from '../../redux/actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '1.5em',
    color: '#fff',
  },
  tooltip: {
    fontSize: theme.typography.pxToRem(19),
  },
}));
const ProductItem = (props) => {
  const { item, name, price, img, id } = props;
  const classes = useStyles();

  const addToBasket = () => {
    props.addProduct(item);
    toast.success(`${name} product added to basket.`);
  };

  return (
    <div className={s.product__item}>
      <img src={img} alt="" className={s.product__img} />
      <span className={s.product__title}>{name}</span>
      <span className={s.product__price}>{price}</span>
      <div className={s.product__buttons}>
        <NavLink to={`/product/${id}`}>
          <LightTooltip TransitionComponent={Zoom} arrow title="View">
            <IconButton size="medium" aria-label="view">
              <VisibilityOutlinedIcon className={classes.icon} />
            </IconButton>
          </LightTooltip>
        </NavLink>
        <LightTooltip TransitionComponent={Zoom} arrow title="Add to basket">
          <IconButton onClick={addToBasket} size="medium" aria-label="add">
            <ShoppingBasketOutlinedIcon className={classes.icon} />
          </IconButton>
        </LightTooltip>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(ProductItem);
