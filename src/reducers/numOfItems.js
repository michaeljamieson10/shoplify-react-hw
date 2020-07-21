import data from '../data.json'
// const INITIAL_STATE = {num1:0,num2:0}
const INITIAL_STATE = data
export default function numOfItems(state=INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_ITEM':
            return {...state, [action.num]: action.value}
        default:
            return {...state, count:0};
         
            return Object.keys(state).map(function(key, index) {
                return state[key];
            })
  
            
            // return {
            //     ...state,
            //     items: state.products.map(el => ({
            //         ...el,
            //         count: 0
            //     }))
            // };
        
    }
}