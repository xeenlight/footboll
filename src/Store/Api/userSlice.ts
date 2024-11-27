import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store'; // Импортируем тип Dispatch

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
      
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      state.user = newUser;
      state.isAuthenticated = true;
      state.savedMatches = [];
    },
    login: (state, action: PayloadAction<User>) => {
      const storedUser = JSON.parse(localStorage.getItem('users') || '[]')
        .find((user: User) => user.useremail === action.payload.useremail);
      if (storedUser && storedUser.userpassword === action.payload.userpassword) {
        state.user = storedUser;
        state.isAuthenticated = true;
        const savedMatches = JSON.parse(localStorage.getItem(storedUser.useremail) || '[]');
        state.savedMatches = savedMatches;
        
        localStorage.setItem('currentUser', JSON.stringify(storedUser));
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.savedMatches = [];
      localStorage.removeItem('currentUser');
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

// Экспортируем действия слайса
export const { register, login, logout, setUser, saveMatch, removeMatch } = userSlice.actions;

// Экспортируем функцию checkUser с типизацией для dispatch
export const checkUser = () => {
  return (dispatch: AppDispatch) => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      dispatch(setUser(user)); // Устанавливаем текущего пользователя из localStorage
    }
  };
};

export default userSlice.reducer;
