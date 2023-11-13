import React, { useState } from 'react';
import "./ExpenseItems.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Cards';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const deleteElement = () => {
        setTitle("Updated!");
        console.log(title);
    };

    const [amount, setAmount] = useState(props.amount);

    const updateExpense = () => {
        setAmount(100);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} amount={amount} Location={props.Location} />
            <button onClick={deleteElement}>Delete Expense</button>
            <button onClick={updateExpense}>Update Expense</button>
        </Card>
    );

}



export default ExpenseItem;
