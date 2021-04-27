import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../Features/Users/UserSlice';
import movieReducer from '../Features/Users/UserSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
