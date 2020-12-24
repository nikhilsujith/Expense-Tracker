// Reducer is a function which takes in a old state and an action and returns a new state

const contextReducer  = (state, action) => { //an action could be add transactions or delete transaction etc

    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload ); //filters out all id's which which don't match the given id
            
            localStorage.setItem('transactions', JSON.stringify(transactions));
            
            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]; // says new transaction pops up at the start and all other transactions remains
            
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        default:
            return state;
    }
}

export default contextReducer;