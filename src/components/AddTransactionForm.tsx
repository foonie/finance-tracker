import React, { useState } from 'react';
import { Transaction } from '../types';

interface AddTransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setDescription('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <input 
          type="number" 
          placeholder="Amount (positive or negative)" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
          required 
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
