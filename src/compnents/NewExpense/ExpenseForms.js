import React from "react";
import './NewExpense.css'
function ExpenseForm() {

    const ChangeHandler = (e) => {
        console.log(e.target.value);
    };
    return (
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control" >
                        <label>Enter Title</label>
                        <input type="text" onChange={ChangeHandler} />

                    </div>

                    <div className="new-expense__control">
                        <label >Enter Amount</label>
                        <input type="number" onChange={ChangeHandler} />

                    </div>

                    <div className="new-expense__control">
                        <label>Enter Date </label>
                        <input type="date" onChange={ChangeHandler} />

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
