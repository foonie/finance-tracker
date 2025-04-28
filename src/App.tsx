
import React, { useState, useEffect } from 'react';
import { Transaction } from './types';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

const App: React.FC = () => {

    // useState<Transaction[]> array will contain Transaction objects.
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

    // addTransaction adds a new transaction to the list.
  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Mini Finance Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <AddTransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
