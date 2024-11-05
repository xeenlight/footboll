import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { StyledMatchPage } from "./MatchPage.style";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(matches);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
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
        setMatches(data.matches);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const handleMouseEnter = (homeImgUrl, awayImgUrl) => {
    // Убираем старое фоновое изображение (если оно было установлено)
    document.body.style.backgroundImage = `url(${homeImgUrl}), url(${awayImgUrl})`;
    document.body.style.backgroundSize = "400px";  // Размер изображений
    document.body.style.backgroundPosition = "left center, right center"; // Позиционируем изображения по центру экрана
    document.body.style.backgroundRepeat = "no-repeat"; // Не повторяем изображения
  
    // Фиксируем изображения по центру экрана с использованием fixed
    document.body.style.position = 'relative';  // Убираем фиксированные блокировки на заднем фоне
    
    // Сделаем картинки фиксированными и разместим их по центру экрана
    document.body.style.backgroundAttachment = "fixed";  // Для фоновых картинок не прокручиваться
    document.body.style.transition = "background-size 1s ease, background-position 1s ease"; // Плавное изменение фона
  };
  

  const handleMouseLeave = () => {
    document.body.style.backgroundImage = "";
  };

  if (loading) {
    return <StyledMatchPage>Loading...</StyledMatchPage>;
  }

  if (error) {
    return <StyledMatchPage>Error: {error}</StyledMatchPage>;
  }

  return (
    <>
      <Header />
      <StyledMatchPage>
        <h1>Matches</h1>
        <ul>
          {matches.map((match) => {
            const winnerClass =
              match.score?.winner === "HOME_TEAM"
                ? "finished-home"
                : match.score?.winner === "AWAY_TEAM"
                ? "finished-away"
                : "";

            const statusClass =
              match.status === "IN_PLAY"
                ? "in-play"
                : match.status === "TIMED"
                ? "timed"
                : match.status === "FINISHED" && match.score?.winner === "DRAW"
                ? "finished-draw"
                : match.status === "FINISHED"
                ? winnerClass
                : match.status === "PAUSED"
                ? "paused"
                : "default";

            return (
              <li
                key={match.id}
                onMouseEnter={() =>
                  handleMouseEnter(match.homeTeam.crest, match.awayTeam.crest)
                }
                onMouseLeave={handleMouseLeave}
                className={`match-item ${statusClass}`}
              >
                <div className="MatchVS">
                  <div>
                    <div className="homeTeam">
                      <img
                        src={match.homeTeam.crest}
                        alt={`${match.homeTeam.name} crest`}
                      />
                      <h2>{match.homeTeam.name}</h2>
                    </div>
                    <h4>{match.score?.fullTime.home ?? "N/A"}</h4>
                  </div>

                  <div className="VS">
                    <h3>VS</h3>
                    <p>{new Date(match.utcDate).toLocaleString()}</p>
                  </div>

                  <div>
                    <div className="awayTeam">
                      <h2>{match.awayTeam.name}</h2>
                      <img
                        src={match.awayTeam.crest}
                        alt={`${match.awayTeam.name} crest`}
                      />
                    </div>
                    <h4>{match.score?.fullTime.away ?? "N/A"}</h4>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </StyledMatchPage>
    </>
  );
};
