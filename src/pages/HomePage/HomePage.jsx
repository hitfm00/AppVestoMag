import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { API } from '../../api';
import ProductsList from '../../components/Products/ProductsList';

import s from './style.module.sass';

const HomePage = () => {
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
