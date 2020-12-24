// Logic for context API
import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer'

// set initial state to empty since we won't have any transactions in the start
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

// creating our context
export const ExpenseTrackerContext = createContext(initialState);

// Here we render the full logic for the context; in the index.js file - 
//  everything wrapped under Provider will have access to the contents within it 
export const Provider = ({children}) => {
    
    /* const [state, dispatch] = useReducer(contextReducer, initialState)  //similar to useState */
    // same as above with replaced names
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    /* Action Creators */
    // to dispatch something, it means to change state of transaction 
    const deleteTransaction = (id) => {
        dispatch( {type: 'DELETE_TRANSACTION', payload: id} ); //reads as : delete this (type) with id (payload.id)
    }
    const addTransaction = (transaction) => {
        dispatch( {type: 'ADD_TRANSACTION', payload: transaction} ); //reads as: add this (type) with data from 'transaction'
    }

    const balance = transactions.reduce((sum, currVal) => {
        return (currVal.type === 'Expense' ? sum - currVal.amount : sum + currVal.amount);
    }, 0);
    
 
    return(
        <ExpenseTrackerContext.Provider value={ {
            deleteTransaction, 
            addTransaction,
            transactions,
            balance
        } }>
             { children } 
        </ExpenseTrackerContext.Provider>
    );
}
