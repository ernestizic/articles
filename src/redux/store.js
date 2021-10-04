import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './slices/articles'



export const store = configureStore({
   reducer: {
       articles: articleReducer
   }
});