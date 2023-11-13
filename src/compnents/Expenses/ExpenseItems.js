import React from 'react';
import "./ExpenseItems.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Cards';

function ExpenseItem(props) {

    const deleteElement = () => {
        console.log(props);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount} Location={props.Location} />
            <button onClick={deleteElement}>Delete Expense</button>
        </Card>
    );

}



export default ExpenseItem;