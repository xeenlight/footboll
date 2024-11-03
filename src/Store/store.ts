import { configureStore } from '@reduxjs/toolkit';
import userReducer, { checkUser } from './Api/userSlice'; // Убедись, что checkUser импортируется

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export { checkUser }; // Добавь этот экспорт, если его нет
export default store;
