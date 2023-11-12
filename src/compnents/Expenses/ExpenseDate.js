import "./ExpenseDate.css";
import React from 'react';

function ExpenseDate(props) {
    const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = mon[props.date.getMonth()];
    const day = props.date.getDate();
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>
                {month}
            </div>
            <div className='expense-date__year'>
                {year}
            </div>
            <div className='expense-date__day'>
                {day}
            </div>
        </div>
    );
}

export default ExpenseDate;