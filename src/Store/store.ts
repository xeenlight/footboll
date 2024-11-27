import { configureStore } from '@reduxjs/toolkit';
import userReducer, { checkUser } from './Api/userSlice';
import matchReducer from './Api/matchSlice'; // Импортируем срез матчей

// Настроим Redux store
const store = configureStore({
    reducer: {
        user: userReducer,
        match: matchReducer, // Добавляем редьюсер матчей
    },
});

// Экспортируем checkUser, который будет использоваться в компонентах
export { checkUser };

// Экспортируем сам store
export default store;

// Типизация для rootState
export type RootState = ReturnType<typeof store.getState>;

// Тип для dispatch
export type AppDispatch = typeof store.dispatch;
