import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slices/articles";
import userReducer from "./slices/users";
import commentReducer from "./slices/comments";

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    users: userReducer,
    comments: commentReducer,
  },
});
