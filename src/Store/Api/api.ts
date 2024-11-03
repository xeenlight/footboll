const API_TOKEN = '494e431e8bb14822bd60d706d0355379';
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/matches'; // Используем CORS Anywhere

const fetchApi = async (endpoint: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': API_TOKEN,
        },
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return await response.json();
};




// Функция для получения данных о лигах
export const getLeagues = async (): Promise<any> => {
    return fetchApi('competitions/');
};

// Функция для получения информации о команде
export const getTeam = async (teamId: number): Promise<any> => {
    return fetchApi(`teams/${teamId}`);
};

// Функция для получения матчей
export const getMatches = async (): Promise<any> => {
    return fetchApi('matches/');
};
