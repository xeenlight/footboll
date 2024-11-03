import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Api/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
