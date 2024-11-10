import { useState, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { StyledCompetitionsPage } from "./CompetitionsPage.style";

export const CompetitionsPage = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(competitions);
  

  useEffect(() => {
    // Функция для загрузки турниров и лиг
    const fetchCompetitions = async () => {
      try {
        // Делаем запрос к API с вашим токеном
        const response = await fetch("https://thingproxy.freeboard.io/fetch/https://api.football-data.org/v4/competitions", {
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
        setCompetitions(data.competitions);
        setLoading(false); // Окончание загрузки
      } catch (error) {
        setError(error.message);
        setLoading(false); // Окончание загрузки в случае ошибки
      }
    };

    // Вызываем функцию при монтировании компонента
    fetchCompetitions();
  }, []);

  return (
    <>
      <Header />
      <StyledCompetitionsPage>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {!loading && !error && (
          <ul>
            {competitions.map((competition) => (
              <li key={competition.id}>
                <h3>{competition.name}</h3>
                <p>{competition.area.name}</p>
              </li>
            ))}
          </ul>
        )}
      </StyledCompetitionsPage>
    </>
  );
};
