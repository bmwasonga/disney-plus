import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../Features/Users/UserSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
