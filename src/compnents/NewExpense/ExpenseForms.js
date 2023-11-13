import React, { useState } from "react";
import './NewExpense.css'
function ExpenseForm() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = (e) => {
        setInputTitle(e.target.value);
    };
    const dateChangeHandler = (d) => {
        setInputDate(d.target.value);
    }
    const amountChangeHandler = (a) => {
        setInputAmount(a.target.value);
    }
    return (
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control" >
                        <label>Enter Title</label>
                        <input type="text" onChange={titleChangeHandler} />

                    </div>

                    <div className="new-expense__control">
                        <label >Enter Amount</label>
                        <input type="number" onChange={amountChangeHandler} />

                    </div>

                    <div className="new-expense__control">
                        <label>Enter Date </label>
                        <input type="date" onChange={dateChangeHandler} />

                    </div>
                    <br></br>
                    <div className="new-expense__actions">
                        <button type="submit" >Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
