import React from 'react';
import { useParams } from 'react-router-dom';

const Stock = ({ stocks }) => {
  const { symbol } = useParams();
  const stock = stocks.find(stock => stock.symbol === symbol);

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div>
      <h2>{stock.name}</h2>
      <p>Last Price: {stock.lastPrice}</p>
      {/* Add other stock details here */}
    </div>
  );
};

export default Stock;
