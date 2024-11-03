import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            const newUser = action.payload;
            const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
            localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
            state.user = newUser;
            state.isAuthenticated = true;
        },
        login: (state, action) => {
            const storedUser = JSON.parse(localStorage.getItem('users') || '[]')
                .find(user => user.useremail === action.payload.useremail);
            if (storedUser && storedUser.userpassword === action.payload.userpassword) {
                state.user = storedUser;
                state.isAuthenticated = true;
            }
        },
        logout: (state) => {
            state.user = null; // Очищаем состояние пользователя в Redux
            state.isAuthenticated = false; // Меняем статус аутентификации
        },
    },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
