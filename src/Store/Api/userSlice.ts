// userSlice.ts

import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';

interface User {
  useremail: string;
  username: string;
  userpassword: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  savedMatches: any[];
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  savedMatches: [],
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
      localStorage.setItem(newUser.useremail, JSON.stringify([]));
    },
    login: (state, action: PayloadAction<User>) => {
      const storedUser = JSON.parse(localStorage.getItem('users') || '[]')
        .find((user: User) => user.useremail === action.payload.useremail);
      if (storedUser && storedUser.userpassword === action.payload.userpassword) {
        state.user = storedUser;
        state.isAuthenticated = true;
        const savedMatches = JSON.parse(localStorage.getItem(storedUser.useremail) || '[]');
        state.savedMatches = savedMatches;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.savedMatches = [];
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      if (action.payload) {
        const savedMatches = JSON.parse(localStorage.getItem(action.payload.useremail) || '[]');
        state.savedMatches = savedMatches;
      }
    },
    saveMatch: (state, action: PayloadAction<any>) => {
      if (state.user) {
        const updatedMatches = [...state.savedMatches, action.payload];
        state.savedMatches = updatedMatches;
        localStorage.setItem(state.user.useremail, JSON.stringify(updatedMatches));
      }
    },
    removeMatch: (state, action: PayloadAction<any>) => {
      const updatedMatches = state.savedMatches.filter((match) => match.id !== action.payload.id);
      state.savedMatches = updatedMatches;
      if (state.user) {
        localStorage.setItem(state.user.useremail, JSON.stringify(updatedMatches));
      }
    },
  },
});

export const { register, login, logout, setUser, saveMatch, removeMatch } = userSlice.actions;

// Экспорт функции checkUser
export const checkUser = () => {
  return (dispatch: Dispatch) => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      dispatch(setUser(user));
    }
  };
};

export default userSlice.reducer;
