import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './slices/articles'
import userReducer from './slices/users'




export const store = configureStore({
   reducer: {
       articles: articleReducer,
       users: userReducer
   }
});