import React, { useState } from 'react';
import { Transaction } from '../types';

interface AddTransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'income' | 'expense'>('income');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sign = type === 'expense' ? -1 : 1;
    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount: sign * Math.abs(amount),
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount(0);
    setType('income');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Enter amount"
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
