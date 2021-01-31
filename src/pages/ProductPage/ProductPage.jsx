import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import s from './style.module.sass';
import { addProduct } from '../../redux/actions';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductPage = (props) => {
  const { match, addProduct } = props;
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const classes = useStyles();

  // Add to cart
  const addToBasket = () => {
    addProduct(data);
    toast.success(`${data.name} product added to basket.`);
  };

  function createData(name, category, price) {
    return { name, category, price };
  }

  const rows = [createData(data.name, data.category, data.price)];

  useEffect(() => {
    const getInfoProductById = async () => {
      try {
        let url = `http://167.172.186.154/api/products/${match.params.id}`;
        let response = await fetch(url);
        let datas = await response.json();
        setData(datas);
        setIsFetching(false);
      } catch (e) {
        console.log(e);
      }
    };
    getInfoProductById();
  }, []);
  return (
    <div className={s.wrapper}>
      <NavLink to="/">
        <Button variant="contained" color="primary" className={s.backButton}>
          Back to products
        </Button>
      </NavLink>
      {isFetching ? (
        <div className="lds-heart">
          <div></div>
        </div>
      ) : (
        <div className={s.productPage}>
          <img src={data.img_url} alt="" className={s.productPage__img} />
          <div className={s.productPage__info}>
            <h4>Information</h4>
            <TableContainer
              component={Paper}
              className={s.productPage__tableContainer}
            >
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={addToBasket}>
              Add to cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(ProductPage);
