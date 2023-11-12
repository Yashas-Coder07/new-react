import React from 'react';
import "./ExpenseItems.css"

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <h3><div>{props.Location}</div></h3>
                <div className='expense-item__price'> Rs {props.amount.toString()} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;