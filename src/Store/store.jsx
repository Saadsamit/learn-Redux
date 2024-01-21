import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";



const store = configureStore({
    reducer:{
        Counter: CounterReducer.reducer
    }
})
export default store