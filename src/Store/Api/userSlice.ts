import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

interface User {
    useremail: string;
    username: string;
    userpassword: string;
}

interface UserState {
    user: User | null; // Укажи правильный тип пользователя
    isAuthenticated: boolean;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<User>) => {
            const newUser = action.payload;
            const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
            localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
            state.user = newUser;
            state.isAuthenticated = true;
        },
        login: (state, action: PayloadAction<User>) => {
            const storedUser = JSON.parse(localStorage.getItem('users') || '[]')
                .find((user: User) => user.useremail === action.payload.useremail);
            if (storedUser && storedUser.userpassword === action.payload.userpassword) {
                state.user = storedUser;
                state.isAuthenticated = true;
            }
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
    },
});

// Action creators
export const { register, login, logout, setUser } = userSlice.actions;

// Thunk to check for user on startup
export const checkUser = () => {
    return (dispatch: Dispatch) => {
        const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (user) {
            dispatch(setUser(user));
        }
    };
};

export default userSlice.reducer;
