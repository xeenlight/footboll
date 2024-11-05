import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { StyledLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        // Запрос к API, чтобы получить данные о матчах
        const response = await fetch(
          "https://thingproxy.freeboard.io/fetch/https://api.football-data.org/v4/matches",
          {
            headers: {
              "X-Auth-Token": "494e431e8bb14822bd60d706d0355379",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Не удалось загрузить данные");
        }

        const data = await response.json();
        console.log("Данные о матчах:", data);
        setMatches(data.matches); // Сохраняем матчей в состояние
      } catch (error) {
        setError(error.message); // Обрабатываем ошибку, если что-то пошло не так
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    fetchMatches(); // Выполняем запрос при монтировании компонента
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только один раз

  if (loading) {
    return <StyledLoginPage>Loading...</StyledLoginPage>; // Показываем индикатор загрузки
  }

  if (error) {
    return <StyledLoginPage>Error: {error}</StyledLoginPage>; // Если ошибка, выводим сообщение об ошибке
  }

  return (
    <>
      <Header />
      <StyledLoginPage>
        <h1>Матчи</h1>
        <ul>
          {matches.map((match) => (
            <li key={match.id}>
              <div className="MatchVS">
                <div className="homeTeam">
                  <img
                    src={match.homeTeam.crest}
                    alt={`${match.homeTeam.name} crest`}
                  />
                  <strong>{match.homeTeam.name}</strong>
                </div>
                <h2>VS</h2>
                <div className="awayTeam">
                  <strong>{match.awayTeam.name}</strong>
                  <img
                    src={match.awayTeam.crest}
                    alt={`${match.awayTeam.name} crest`}
                  />
                </div>
              </div>
              {new Date(match.utcDate).toLocaleString()}{" "}
            </li>
          ))}
        </ul>
      </StyledLoginPage>
    </>
  );
};
