import { createSlice } from '@reduxjs/toolkit'
import allCart from "../../data/cart.json"


const initialState = {
    value: {
        cartProducts: allCart,
    }
  }


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {


    },
})
  

  export const { } = cartSlice.actions
  
  export default cartSlice.reducer