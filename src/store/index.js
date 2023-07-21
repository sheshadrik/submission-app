import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {basicDetailsReducer, contactDetailsReducer} from "../reducer";

const reducer = combineReducers({
    basicDetails: basicDetailsReducer,
    contactDetails: contactDetailsReducer
  })

const store = configureStore( {
    reducer: reducer,
    devTools: true // For dev environment true, for prod false;
    }
  )

  export default store;
