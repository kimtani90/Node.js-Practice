import {ADD_TODO, DONE_TODO} from "../actions/index";

// https://github.com/reactjs/react-redux/blob/d5bf492ee35ad1be8ffd5fa6be689cd74df3b41e/src/components/createConnect.js#L91
const initialState = {items: {
    "Pizza": {price: '12', status: 'new'},
    "Pasta": {price: '4', status: 'new'},
    "Dosa": {price: '5', status: 'new'},
    "Coke": {price: '1', status: 'new'},
    "Sprite": {price: '2', status: 'new'}
    },
    total:0
};

const todos = (state = initialState, action) => {
console.log(state.items[action.newItem]);
    switch (action.type) {

        case ADD_TODO :
            return {
                ...state,

                items:{...state.items,
                    [action.newItem] : { price: state.items[action.newItem].price, status:'active'}
                }, total : state.total + Number(state.items[action.newItem].price)

            };

        case DONE_TODO :
            return {
                ...state,

                items:{...state.items,
                    [action.changedTodo] : { price: state.items[action.changedTodo].price, status:'cancel'}
                }, total : state.total - Number(state.items[action.changedTodo].price)

            };

        default :
            return state;

    }
};

export default todos;