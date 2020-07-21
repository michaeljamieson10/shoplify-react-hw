import data from '../data.json'
import { combineReducers } from 'redux'; 
import countReducer from './count';
import numReducer from './numOfItems';
// const rootReducer = combineReducers({count: countReducer, item: numReducer})
const INITIAL_STATE = 
    { products: data.products,
      cartItems: {}
    };
// console.log(data.products)
// console.log(data)

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cartCopy = { ...state.cartItems };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state,
        cartItems: cartCopy  
      }
    }

    case "REMOVE_FROM_CART": {
      const cartCopy = { ...state.cartItems };
      if(!cartCopy[action.id]) return state;
      cartCopy[action.id]--;
      if(cartCopy[action.id] === 0){
        delete cartCopy[action.id];
      }
      return { 
        ...state,
        cartItems: cartCopy
      }
    }
    default:
      return state
  }
}

export default rootReducer;
