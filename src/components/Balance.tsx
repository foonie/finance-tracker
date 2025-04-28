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
    <div className="balance">
        
        <h2>Balance: R{balance.toFixed(2)}</h2>      <div className="income-expense">
        <div className="income">
          <h4>Income</h4>
          <p>R{income.toFixed(2)}</p>
          </div>
        <div className="expense">
          <h4>Expense</h4>
          <p>R{Math.abs(expense).toFixed(2)}</p>
          </div>
      </div>
    </div>
  );
};

export default Balance;
