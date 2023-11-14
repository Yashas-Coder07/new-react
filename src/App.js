
import './App.css';
import ExpenseItem from './component/Expenses/ExpenseItems';
import ExpenseForm from './component/NewExpenses/ExpenseForms';
import React from 'react';
import Card from './component/UI/Cards';
const App = () => {
  const expense = [
    {
      title: "Toilet paper",
      amount: 100,
      date: new Date(2021, 3, 12),

    },
    {
      title: "TV",
      amount: 10000,
      date: new Date(2021, 3, 2)
    },
    {
      title: "Rice",
      amount: 450,
      date: new Date(2021, 3, 12)
    }
  ]

  function saveData(data) {
    const totalData = {
      ...data,
      id: Math.random().toString()
    };
    console.log(totalData);
  };

  return (
    <Card className='expenses'>
      <ExpenseForm onSaveData={saveData} />

      {expense.map(index => (

        <ExpenseItem title={index.title} amount={index.amount} date={index.date} />

      ))}

    </Card>
  );
}

export default App;
