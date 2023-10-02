import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

        if (event.target.value < totalExpenses){
            alert("You cannot reduce the budget that is already allocated!");
        }else{
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        }


    }
    return (
<div className='alert alert-secondary' style={{height: "75px"}}>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onInput={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
