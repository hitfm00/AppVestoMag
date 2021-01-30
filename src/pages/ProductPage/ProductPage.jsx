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
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductPage = (match) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const classes = useStyles();

  function createData(name, category, price) {
    return { name, category, price };
  }

  const rows = [createData(data.name, data.category, data.price)];

  useEffect(() => {
    const getInfoProductById = async () => {
      let url = `http://167.172.186.154/api/products/${match.match.params.id}`;
      let response = await fetch(url);
      let datas = await response.json();
      setData(datas);
      setIsFetching(false);
    };
    getInfoProductById();
  }, []);
  return (
    <div className={s.wrapper}>
      <Button variant="contained" color="primary" className={s.backButton}>
        <NavLink to="/">Back to products</NavLink>
      </Button>
      {isFetching ? (
        <div class="lds-heart">
          <div></div>
        </div>
      ) : (
        <div className={s.productPage}>
          <img src={data.img_url} alt="" className={s.productPage__img} />
          <div className={s.productPage__info}>
            <h4>Information</h4>
            <TableContainer component={Paper}>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
