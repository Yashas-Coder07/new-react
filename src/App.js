
import './App.css';
import ExpenseItem from './component/Expenses/ExpenseItems';
import ExpenseForm from './component/NewExpenses/ExpenseForms';
import React, { useState } from 'react';
import Card from './component/UI/Cards';
const Intial_Expenses = [
  {
    id: 'e1',
    title: "Toilet paper",
    amount: 100,
    date: new Date(2021, 3, 12),

  },
  {
    id: 'e2',
    title: "TV",
    amount: 10000,
    date: new Date(2021, 3, 2)
  },
  {
    id: 'e3',
    title: "Rice",
    amount: 450,
    date: new Date(2021, 3, 12)
  }
];


const App = () => {
  const [expense, setExpenses] = useState(Intial_Expenses);

  function saveData(data) {
    const newData = {
      ...data,
      id: Math.random().toString()
    }
    setExpenses(prevExpenses => {
      const totalData = [newData, ...prevExpenses];
      return totalData;
    });

  };

  return (
    <Card className='expenses'>
      <ExpenseForm onSaveData={saveData} />

      {expense.map(index => (

        <ExpenseItem amount={index.amount} title={index.title} key={index.id} date={index.date} />

      ))}

    </Card>
  );
}

export default App;
