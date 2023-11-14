
import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expenseContent = <p>No expense found.</p>
    let oneExpenseContent = <p>Only single Expense here. Please add more...</p>
    filteredExpense.map((expense) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))

    if (filteredExpense.length > 0) {
        expenseContent = filteredExpense.map((expense) => (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {filteredExpense.length === 1 && oneExpenseContent}
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;