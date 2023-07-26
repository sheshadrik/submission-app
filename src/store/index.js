import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import {basicDetailsReducer, contactDetailsReducer} from "../reducer";
import loanReducer from '../slices/loanApplicationSlice';
import thunkMiddleware from 'redux-thunk';

// const reducer = combineReducers({
//     basicDetails: basicDetailsReducer,
//     contactDetails: contactDetailsReducer
//   })

  const reducer = combineReducers({
    loan: loanReducer,
    //customer: customerReducer
  })

const store = configureStore( {
    reducer: reducer,
    middleware: [thunkMiddleware],
    devTools: true // For dev environment true, for prod false;
    }
  )

  export default store;
