import { configureStore } from "@reduxjs/toolkit";
import stateReducer from './reducer'

const store = configureStore({
  reducer: { 
    movie: stateReducer
   },
});

export default store;
