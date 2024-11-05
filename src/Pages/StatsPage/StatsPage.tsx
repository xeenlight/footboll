import React, { useState, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { StyledStatsPage } from "./StatsPage.style";

export const StatsPage = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(matches);
  

  useEffect(() => {
    // Функция для загрузки статистики матчей
    const fetchMatchStats = async () => {
      try {
        // Пример запроса статистики матчей для конкретной лиги (например, АПЛ)
        const response = await fetch("https://thingproxy.freeboard.io/fetch/https://api.football-data.org/v4/competitions/PL/matches", {
          method: "GET",
          headers: {
            "X-Auth-Token": "494e431e8bb14822bd60d706d0355379", // Ваш токен
          },
        });

        // Проверка на успешный ответ
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }

        // Получаем данные из ответа
        const data = await response.json();

        // Устанавливаем полученные данные в состояние
        setMatches(data.matches);
        setLoading(false); // Окончание загрузки
      } catch (error) {
        setError(error.message);
        setLoading(false); // Окончание загрузки в случае ошибки
      }
    };

    // Вызываем функцию при монтировании компонента
    fetchMatchStats();
  }, []);

  return (
    <>
      <Header />
      <StyledStatsPage>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {!loading && !error && (
          <div>
            <h2>Статистика матчей</h2>
            <ul>
              {matches.map((match) => (
                <li key={match.id}>
                  <h3>{match.homeTeam.name} vs {match.awayTeam.name}</h3>
                  <p>Дата: {new Date(match.utcDate).toLocaleDateString()}</p>
                  <p>Результат: {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</p>
                  <p>Голы в первом тайме: {match.score.halfTime.homeTeam} - {match.score.halfTime.awayTeam}</p>
                  <p>Угловые: {match.homeTeam.corners} - {match.awayTeam.corners}</p>
                  <p>Желтые карточки: {match.homeTeam.yellowCards} - {match.awayTeam.yellowCards}</p>
                  <p>Красные карточки: {match.homeTeam.redCards} - {match.awayTeam.redCards}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </StyledStatsPage>
    </>
  );
};
