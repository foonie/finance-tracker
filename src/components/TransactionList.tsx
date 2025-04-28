import React from 'react';
import { Transaction } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface TransactionListProps {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <motion.ul initial={false}>
        <AnimatePresence>
          {transactions.map((transaction) => (
            <motion.li
              key={transaction.id}
              className={transaction.amount < 0 ? 'negative' : ''}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              {transaction.description} - R{transaction.amount.toFixed(2)}
              <button onClick={() => deleteTransaction(transaction.id)}>X</button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default TransactionList;
