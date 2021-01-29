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
  const { name, price, img } = props;
  const classes = useStyles();

  return (
    <div className={s.product__item}>
      <img src={img} alt="" className={s.product__img} />
      <span className={s.product__title}>{name}</span>
      <span className={s.product__price}>{price}</span>
      <div className={s.product__buttons}>
        <LightTooltip TransitionComponent={Zoom} arrow title="View">
          <IconButton size="medium" aria-label="view">
            <VisibilityOutlinedIcon className={classes.icon} />
          </IconButton>
        </LightTooltip>
        <LightTooltip TransitionComponent={Zoom} arrow title="Add to basket">
          <IconButton size="medium" aria-label="add">
            <ShoppingBasketOutlinedIcon className={classes.icon} />
          </IconButton>
        </LightTooltip>
      </div>
    </div>
  );
};

export default ProductItem;
