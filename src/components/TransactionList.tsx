import React from 'react';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount.toFixed(2)}
            <button 
              style={{ marginLeft: '10px', color: 'red' }}
              onClick={() => deleteTransaction(transaction.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
