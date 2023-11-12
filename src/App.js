
import './App.css';
import ExpenseItem from './components/ExpsenseItems';
import React from 'react';
import Card from '../UI/Card';
const App = () => {
  const expense = [
    {
      title: "Toilet paper",
      amount: 100,
      date: new Date(2021, 3, 12),
      Location: "Mall"
    },
    {
      title: "TV",
      amount: 10000,
      date: new Date(2021, 3, 2),
      Location: "Electrical Shop"
    },
    {
      title: "Rice",
      amount: 450,
      date: new Date(2021, 3, 12),
      Location: "Grocery Shop"
    }]

  return (
    <Card className='expenses'>

      {expense.map(index => (

        <ExpenseItem title={index.title} amount={index.amount} date={index.date} Location={index.Location} />

      ))}

    </Card>
  );
}

export default App;
