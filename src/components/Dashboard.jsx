import React from 'react'

function Dashboard() {
  return (
    <div>
      <h2>All stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard