import Decimal from 'decimal.js';
import React, { useEffect, useState } from 'react';

const TotalPrice = (props) => {
  const { data } = props;
  const [summaryPrice, setSummaryPrice] = useState();

  useEffect(() => {
    const getSummaryPrice = () => {
      let price = new Decimal(0);
      data.forEach((item) => {
        price = price.plus(new Decimal(item.price));
      });
      setSummaryPrice(price.toString());
    };
    getSummaryPrice();
  }, [data]);
  return (
    <div className="totalPrice__block">
      <span>Total:</span>
      <span className="totalPrice__text">${summaryPrice}</span>
    </div>
  );
};

export default TotalPrice;
