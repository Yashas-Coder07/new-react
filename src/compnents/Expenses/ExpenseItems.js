import React from 'react';
import "./ExpenseItems.css";
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Cards';

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} key={props.id} />
            <ExpenseDetails title={props.title} amount={props.amount} />

        </Card>
    );

}



export default ExpenseItem;
