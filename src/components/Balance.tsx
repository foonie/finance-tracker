import React from 'react';
import { Transaction } from '../types';

interface BalanceProps {
  transactions: Transaction[];
}

const Balance: React.FC<BalanceProps> = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const balance = amounts.reduce((acc, amount) => acc + amount, 0);
  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, amount) => acc + amount, 0);
  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, amount) => acc + amount, 0);

  return (
    <div>
      <h2>Balance: ${balance.toFixed(2)}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <div style={{ color: 'green' }}>
          <h4>Income</h4>
          <p>${income.toFixed(2)}</p>
        </div>
        <div style={{ color: 'red' }}>
          <h4>Expense</h4>
          <p>${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
