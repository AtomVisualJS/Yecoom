import { configureStore } from '@reduxjs/toolkit';
import postReducer from './Slice/PostsSlice';
import userReducer from './Slice/userSlice';
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
