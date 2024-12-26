// import {createStore } from "redux";

// const initialState = {
//     count: 0,
// }



// // reducer
// const counterReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return {...state , count: state.count + 1};
//         case 'DECREMENT':
//             return {...state , count: state.count - 1};
//             default:
//                 return state;
//     }
// }


// // create store
// const store = createStore(counterReducer);

// export default store;



// *******Redux Toolkit*******

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});


export default store;