const INITIAL_STATE = 0;
export default function count(state,action){
  switch (action.type) {
        case "INCREMENT":
          return  state + 1;
    
        case "DECREMENT":
          return state - 1;
    
        default:
          return 0;
    }
  }
// const INITIAL_STATE = { count: 0 };

// function rootReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };

//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };

//     default:
//       return state;
//   }
// }

// export default rootReducer;
