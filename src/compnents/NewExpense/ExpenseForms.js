import React, { useState } from "react";
import './NewExpense.css'
function ExpenseForm(props) {

    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = (e) => {
        setInputTitle(e.target.value);
    };
    const dateChangeHandler = (d) => {
        setInputDate(d.target.value);
    };
    const amountChangeHandler = (a) => {
        setInputAmount(a.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveData(expenseData);

        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    };
    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control" >
                        <label>Enter Title</label>
                        <input type="text" value={inputTitle} onChange={titleChangeHandler} />
                    </div>

                    <div className="new-expense__control">
                        <label >Enter Amount</label>
                        <input type="number" value={inputAmount} onChange={amountChangeHandler} />

                    </div>

                    <div className="new-expense__control">
                        <label>Enter Date </label>
                        <input type="date" value={inputDate} onChange={dateChangeHandler} />

                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>

            </form>
        </div>
    );
}

export default ExpenseForm;
