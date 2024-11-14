import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Match {
    id: string;
    homeTeam: string;
    awayTeam: string;
    score: string;
    status: string;
}

interface MatchState {
    savedMatches: Match[];
}

const initialState: MatchState = {
    savedMatches: [],
};

const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        addMatch: (state, action: PayloadAction<Match>) => {
            // Добавляем матч в сохраненные
            state.savedMatches.push(action.payload);

            // Сохраняем в localStorage
            const currentMatches = JSON.parse(localStorage.getItem('savedMatches') || '[]');
            localStorage.setItem('savedMatches', JSON.stringify([...currentMatches, action.payload]));
        },
        removeMatch: (state, action: PayloadAction<string>) => {
            // Удаляем матч из сохраненных
            state.savedMatches = state.savedMatches.filter(match => match.id !== action.payload);

            // Обновляем localStorage
            const currentMatches = state.savedMatches;
            localStorage.setItem('savedMatches', JSON.stringify(currentMatches));
        },
        setSavedMatches: (state) => {
            // Загружаем сохраненные матчи из localStorage
            const storedMatches = JSON.parse(localStorage.getItem('savedMatches') || '[]');
            state.savedMatches = storedMatches;
        },
    },
});

export const { addMatch, removeMatch, setSavedMatches } = matchSlice.actions;
export default matchSlice.reducer;
