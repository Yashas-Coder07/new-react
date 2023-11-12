import React from 'react';
import "./ExpenseItems.css";
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <h3><div>{props.Location}</div></h3>
                <div className='expense-item__price'> Rs {props.amount.toString()} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;