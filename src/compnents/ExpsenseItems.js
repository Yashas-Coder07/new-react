import React from 'react';
import "./ExpenseItems.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount} Location={props.Location} />

        </div>
    );
}

export default ExpenseItem;