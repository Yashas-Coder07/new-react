import "./ExpenseItems.css";
import React from 'react';

function ExpenseDetails(props) {

    return (
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h3>{props.Location}</h3>
            <div
                className='expense-item__price'>
                Rs {props.amount.toString()} </div>
        </div>
    );
}

export default ExpenseDetails;