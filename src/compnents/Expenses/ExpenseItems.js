import React from 'react';
import "./ExpenseItems.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={props.amount} Location={props.Location} />

        </Card>
    );
}

export default ExpenseItem;