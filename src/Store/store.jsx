import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";
import myApi from "./MyApi";



const store = configureStore({
    reducer:{
        [CounterReducer.name]: CounterReducer.reducer,
        [myApi.reducerPath]: myApi.reducer
    },
    middleware: (mid) =>
    mid().concat(myApi.middleware),
})
export default store