import { configureStore } from '@reduxjs/toolkit';
import userReducer, { checkUser } from './Api/userSlice';
import matchReducer from './Api/matchSlice'; // Импортируем срез матчей

const store = configureStore({
    reducer: {
        user: userReducer,
        match: matchReducer, // Добавляем редьюсер матчей
    },
});

export { checkUser };
export default store;
export type RootState = ReturnType<typeof store.getState>;

