import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/User/userSlice';
import adminReducer from '../features/User/adminSlice';

export const store = configureStore({
  reducer: {

    user:userReducer,
    admin:adminReducer,
  },
});
