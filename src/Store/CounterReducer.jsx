// import { createReducer } from "@reduxjs/toolkit";
// const initialState ={
//     value: 0
// }

// const CounterReducer = createReducer(initialState,{
//     increment: (state)=>{
//         state.value += 1
//     },
//     addcustom: (state,action)=>{
//         state.value += action.payload
//     },
//     decrement: (state)=>{
//         state.value -= 1
//     }
// })

// export default CounterReducer


import { createSlice } from '@reduxjs/toolkit'

const CounterReducer = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = CounterReducer.actions

export default CounterReducer
