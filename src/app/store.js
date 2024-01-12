import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import shopReducer from "../features/shop/shopSlice"
import cartReducer from "../features/shop/cartSlice"
import { shopApi } from './services/shopService'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),
})


setupListeners(store.dispatch)