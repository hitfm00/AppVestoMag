import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { API } from '../../api';
import ProductsList from '../../components/Products/ProductsList';

import s from './style.module.sass';

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await API.getProducts().then((response) => {
          console.log(response);
        });
        setData(response);
      } catch (e) {
        console.log(e);
      }
    };
    getProducts();
  }, []);
  console.log(data);

  return (
    <div className={s.homePage}>
      <Container maxWidth="lg">
        <h2>Товары</h2>
        <ProductsList />
      </Container>
    </div>
  );
};

export default HomePage;
