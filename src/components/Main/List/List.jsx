import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

// context stuff
import { ExpenseTrackerContext } from '../../../context/context';
import { useContext } from 'react';

const List = () => {
    const classes = useStyles(); 
    
    /* const {globalState} = useContext(ExpressTrackerContext)  -> gives access to addTransaction and deleteTransaction*/
    //  but here, we'll destructure globalState and just use deleteTransaction
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
    console.log(deleteTransaction); 
     
    // // demo transaction
    // const transactions = [
    //     {id: 1, type: "Income", category: 'Salary', amount: 50, date: 'Mon Dec 21 2020 '},
    //     {id: 2, type: "Expense", category: 'Pets', amount: 150, date: 'Mon Dec 19 2020 '},
    //     {id: 3, type: "Income", category: 'Salary', amount:100, date: 'Mon Dec 20 2020 '}
    // ];

    return (
        <MUIList dense = {false} className = {classes.list}>
            { transactions.map( (transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key = { transaction.id }>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className = { transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary = { transaction.category } secondary={`$${ transaction.amount } - ${ transaction.date }`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge = "end" aria-label = "delete" onClick={ () => deleteTransaction(transaction.id)  }>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ) ) }
        </MUIList>
    )
}

export default List
