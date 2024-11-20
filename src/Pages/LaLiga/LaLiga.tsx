import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { saveMatch, removeMatch } from "../../Store/Api/userSlice";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { StyledMatchPage } from '../../Theme/globalStyle';
import { LoginModal } from "../../Components/LoginModal/LoginModal"; // Импортируем модальное окно
import Loader from "../../Components/Loader/Loader";

export const LaLiga = () => {
  const [matches, setMatches] = useState<any[]>([]);
  const [filteredMatches, setFilteredMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>(""); // Состояние для выбранного фильтра
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Состояние для модального окна

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const savedMatches = useSelector(
    (state: RootState) => state.user.savedMatches
  );

  // Функция для фильтрации матчей по статусу
  const filterMatches = (status: string) => {
    if (filter === status) {
      setFilter(""); // Сброс фильтра
      setFilteredMatches(matches); // Показываем все матчи
    } else {
      setFilter(status); // Устанавливаем новый фильтр
      let filtered: any[] = [];
      if (status === "in-play") {
        filtered = matches.filter((match) => match.status === "IN_PLAY");
      } else if (status === "soon") {
        filtered = matches.filter((match) => match.status === "TIMED");
      } else if (status === "finished") {
        filtered = matches.filter(
          (match) =>
            match.status === "FINISHED" && match.score?.winner !== "DRAW"
        );
      } else if (status === "draw") {
        filtered = matches.filter(
          (match) =>
            match.status === "FINISHED" && match.score?.winner === "DRAW"
        );
      } else if (status === "paused") {
        filtered = matches.filter((match) => match.status === "PAUSED");
      } else if (status === "postponed") {
        filtered = matches.filter((match) => match.status === "POSTPONED");
      }
      setFilteredMatches(filtered); // Применяем фильтрацию
    }
  };

  // Обработчик для клика по кнопкам фильтрации
  const handleButtonClick = (status: string) => {
    filterMatches(status);
  };

  // Логика для изменения фона
  const handleMouseEnter = (homeImgUrl: any, awayImgUrl: any) => {
    document.body.style.backgroundImage = `url(${homeImgUrl}), url(${awayImgUrl})`;
    document.body.style.backgroundSize = "400px";
    document.body.style.backgroundPosition = "left center, right center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.position = "relative";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition =
      "background-size 1s ease, background-position 1s ease";
  };

  const handleMouseLeave = () => {
    document.body.style.transition = "none"; // Снятие переходов на время сброса
    document.body.style.backgroundImage = "";
    document.body.style.backgroundSize = "";
    document.body.style.backgroundPosition = "";
    document.body.style.backgroundRepeat = "";
    document.body.style.backgroundAttachment = "";
    document.body.style.position = "";
    document.body.style.transition =
      "background-size 1s ease, background-position 1s ease"; // Восстановление переходов
  };

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          "https://thingproxy.freeboard.io/fetch/https://api.football-data.org/v4/competitions/PD/matches",
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
        setFilteredMatches(data.matches); // Сразу сохраняем все матчи
      } catch (error) {
        setError("Ошибка при загрузке матчей");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  // Обработчик сохранения матча
  const handleSaveMatch = (match: any) => {
    if (isAuthenticated) {
      dispatch(saveMatch(match));
    } else {
      setIsLoginModalOpen(true); // Если не авторизован, показываем модальное окно
    }
  };

  // Обработчик удаления матча
  const handleRemoveMatch = (match: any) => {
    dispatch(removeMatch(match));
  };

  // Обработчик успешного входа
  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false); // Закрываем модальное окно
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <StyledMatchPage>Error: {error}</StyledMatchPage>;
  }

  return (
    <>
      <Header />
      <StyledMatchPage>
        <h1>La Liga</h1>

        <div className="filter-buttons">
          <button
            onClick={() => handleButtonClick("in-play")}
            className={filter === "in-play" ? "active" : ""}
          >
            In live
          </button>
          <button
            onClick={() => handleButtonClick("finished")}
            className={filter === "finished" ? "active" : ""}
          >
            Finished
          </button>
          <button
            onClick={() => handleButtonClick("draw")}
            className={filter === "draw" ? "active" : ""}
          >
            Draw
          </button>
          <button
            onClick={() => handleButtonClick("paused")}
            className={filter === "paused" ? "active" : ""}
          >
            Pause
          </button>
          <button
            onClick={() => handleButtonClick("soon")}
            className={filter === "soon" ? "active" : ""}
          >
            Soon
          </button>
          <button
            onClick={() => handleButtonClick("postponed")}
            className={filter === "postponed" ? "active" : ""}
          >
            Postponed
          </button>
        </div>

        <ul>
          {filteredMatches.map((match) => {
            const isSaved = savedMatches.some((saved) => saved.id === match.id);
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
                : match.status === "POSTPONED"
                ? "postponed"
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
                <div className={`MatchVS ${statusClass}`}>
                  <div className="homeTeam">
                    <img
                      src={match.homeTeam.crest}
                      alt={`${match.homeTeam.name} crest`}
                    />
                    <h2>{match.homeTeam.name}</h2>
                  </div>

                  <div className="VS">
                    <h3>VS</h3>
                    <p>{new Date(match.utcDate).toLocaleString()}</p>
                  </div>

                  <div className="awayTeam">
                    <h2>{match.awayTeam.name}</h2>
                    <img
                      src={match.awayTeam.crest}
                      alt={`${match.awayTeam.name} crest`}
                    />
                  </div>

                  <div className="buttonsSave">
                    {isSaved ? (
                      <button
                        onClick={() => handleRemoveMatch(match)}
                        className="remove-button"
                      >
                        Delete
                      </button>
                    ) : (
                      <button onClick={() => handleSaveMatch(match)}>
                        Save Match
                      </button>
                    )}
                  </div>
                </div>

                <div className="score-container">
                  <div className="halfTimeContainer">
                    <h5>Half time</h5>
                    <div className="halfTime">
                      <div className="score home-score">
                        {match.score?.halfTime.home ?? "N/A"}
                      </div>
                      <div className="score away-score">
                        {match.score?.halfTime.away ?? "N/A"}
                      </div>
                    </div>
                  </div>

                  <div className="fullTimeContainer">
                    <h5>Full time</h5>
                    <div className="fullTime">
                      <div className="score home-score">
                        {match.score?.fullTime.home ?? "N/A"}
                      </div>
                      <div className="score away-score">
                        {match.score?.fullTime.away ?? "N/A"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </StyledMatchPage>
      <Footer />

      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setIsLoginModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
};
